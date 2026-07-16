---
title: 动态规划之线性DP
date: 2026-07-16 09:13:07
categories: [算法]
tags: [动态规划, LIS, LCS, 最大子段和] 
---

线性DP是最基础，最常用的动态规划类型，其核心特征为**状态转移沿着某个线性方向进行**。

---

在动态规划中，**子数组（子串）、子段、子序列、子集**是四个极易混淆的概念。

<table>
  <thead>
    <tr>
      <th>概念</th>
      <th>是否连续</th>
      <th>是否保持顺序</th>
      <th>是否允许为空</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>子数组（子串）</strong></td>
      <td>✅ 必须连续</td>
      <td>✅ 保持</td>
      <td>❌ 通常非空</td>
    </tr>
    <tr>
      <td><strong>子段</strong></td>
      <td>✅ 必须连续</td>
      <td>✅ 保持</td>
      <td>❌ 通常非空</td>
    </tr>
    <tr>
      <td><strong>子序列</strong></td>
      <td>❌ 可以不连续</td>
      <td>✅ 保持</td>
      <td>✅ 可以为空</td>
    </tr>
    <tr>
      <td><strong>子集</strong></td>
      <td>❌ 不要求连续</td>
      <td>❌ 不要求</td>
      <td>✅ 可以为空</td>
    </tr>
  </tbody>
</table>

---

## 1. 最长上升子序列（LIS）

### 问题描述：
给定一个长度为`N`的数组`a[]`,求其**严格递增**的最长子序列的长度。

### 法一：DP

### 转移方程：
```cpp
dp[i] = max(dp[i],dp[j] + 1) // j < i && a[j] < a[i]
```

### 代码模板：
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void solve() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for(int i = 0;i < n;++i) cin >> nums[i];
    vector<int> dp(n,1); // dp[i]表示以nums[i]结尾的最长上升子序列长度
    int ans = 1; // 最长上升子序列的长度
    for(int i = 1;i < n;++i) {
        for(int j = 0;j < i;++j) {
            if(nums[i] > nums[j]) dp[i] = max(dp[i],dp[j] + 1);
        }
        ans = max(ans,dp[i]);
    }
    cout << ans << "\n";
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    int t = 1;
    //cin >> t;
    while(t--) solve();
    return 0;
}
```

### 法二：贪心 + 二分

###核心思想：维护`tail`数组，`tail[len]`表示为长度为len的上升子序列的最小末尾值。

### 代码模板：
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void solve() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for(int i = 0;i < n;++i) cin >> nums[i];
    vector<int> tails; // tails[i]表示长度为 i+1 的上升子序列的最小结尾元素
    for(int i = 0;i < n;++i) {
        auto it = lower_bound(tails.begin(),tails.end(),nums[i]);
        if(it == tails.end()) tails.push_back(nums[i]); // 如果nums[i]大于所有结尾元素，则扩展最长上升子序列
        else *it = nums[i]; // 否则更新对应长度的最小结尾元素
    }
    cout << tails.size() << "\n"; // 最长上升子序列的长度
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    int t = 1;
    //cin >> t;
    while(t--) solve();
    return 0;
}
```

---

## 2. 最长公共子序列（LCS）

### 问题描述：
给定两个字符串`A`和`B`，求它们的**最长公共子序列**的长度。

### 转移方程：
```cpp
if(A[i] == B[j]) dp[i][j] == dp[i - 1][j - 1] + 1;
else dp[i][j] = max(dp[i - 1][j],dp[i][j - 1]);
```

### 代码模板：
```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

void solve() {
    string s1,s2;
    cin >> s1 >> s2;
    int n = s1.size(),m = s2.size();
    vector<vector<int>> dp(n + 1,vector<int>(m + 1,0)); // dp[i][j]表示s1前i个字符和s2前j个字符的最长公共子序列长度
    for(int i = 1;i <= n;++i) {
        for(int j = 1;j <= m;++j) {
            if(s1[i - 1] == s2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1; // 如果当前字符相同，则最长公共子序列长度加1
            else dp[i][j] = max(dp[i - 1][j],dp[i][j - 1]); // 否则取前一个状态的最大值
        }
    }
    cout << dp[n][m] << "\n"; // 最长公共子序列的长度
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    int t;
    //cin >> t;
    while(t--) solve();
    return 0;
}
```

---

## 3. 数字三角形（数塔问题）

### 问题描述：
给定一个三角形数字矩阵，从顶部出发，每次只能走到下一层相邻的位置，求路径上数字之和的最大值。

### 转移方程（自底向上）：
```cpp
dp[i][j] = a[i][j] + max(dp[i + 1][j],dp[i + 1][j + 1]);
```

### 代码模板：
```cpp
#include <iostream>
#include <vector>
using namespace std;

void solve() {
    int n;
    cin >> n;
    vector<vector<int>> a(n,vector<int>(n,0));
    for(int i = 0;i < n;++i) {
        for(int j = 0;j < i;++j) cin >> a[i][j];
    }
    vector<vector<int>> dp = a;
    for(int i = n - 2;i >= 0;--i) {
        for(int j = 0;j <= i;++j) {
            dp[i][j] = a[i][j] + max(dp[i + 1][j + 1], dp[i + 1][j]);
        }
    }
    cout << dp[0][0] << "\n";
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int t = 1;
    //cin >> t;
    while(t--) solve();
    return 0;
}
```

---

## 4. 最大子段和

### 问题描述：
给定一个整数数组，求**连续子数组**的最大和。

### 转移方程：
```cpp
dp[i] = max(a[i],dp[i - 1] + a[i]);
```

### 代码模板：
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void solve() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for(int i = 0;i < n;++i) cin >> nums[i];
    int cur = nums[0]; // 以第一个元素结尾的最大和
    int ans = cur; // 全局最大和
    for(int i = 1;i < n;++i) {
        cur = max(cur + nums[i],nums[i]); // 以nums[i]结尾的最大和
        ans = max(ans,cur); // 更新全局最大和
    }
    cout << ans << "\n";
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
    int t = 1;
    //cin >> t;
    while(t--) solve();
    return 0;
}
```
