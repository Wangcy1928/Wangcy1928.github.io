---
title: 动态规划之背包DP
date: 2026-07-15 20:05:33
categories: [算法]
tags: [动态规划, 01背包, 完全背包, 多重背包, 分组背包]
---

背包问题是动态规划中最经典，最基础的模型之一。

---

## 1. 01背包

### 问题描述：
有`N`件物品，每件重量`w[i]`，价值`v[i]`，背包容量`V`。每件物品**只能选一次**，求最大总价值。

### 转移方程（一维）
```cpp
for(int i = 1;i <= N;++i) {
    for(int j = V;j >= w[i];--j)   // 逆序！
        dp[j] = max(dp[j],dp[j - w[i]] + v[i]);
```

### **为什么逆序？**
因为每个物品只能用一次。逆序保证`dp[j - w[i]]`来自**上一轮**（未选当前物品）的状态，防止一个物品被多次选择。

### 代码模板
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void solve() {
    int N,V; // N表示物品数量，V表示背包容量
    cin >> N >> V;
    vector<int> w(N), v(N); // w[i]表示第i个物品的重量，v[i]表示第i个物品的价值
    for(int i = 0;i < N;++i) cin >> w[i] >> v[i];
    vector<int> dp(V + 1,0); // dp[j]表示容量为j的背包所能获得的最大价值
    for(int i = 0;i < N;++i) {
        for(int j = V;j >= w[i];--j) { // 逆序遍历，保证每个物品只能被选择一次
            dp[j] = max(dp[j],dp[j - w[i]] + v[i]);
        }
    }
    cout << dp[V] << "\n";
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

## 2. 完全背包

### 问题描述：
有`N`种物品，每种物品有重量`w[i]`，价值`v[i]`，背包容量`V`。每件物品**可以无限次选择**（数量不限），求最大总价值。

### 转移方程（一维）
```cpp
for (int i = 1; i <= N; i++)
    for (int j = w[i]; j <= V; j++)   // 顺序！
        dp[j] = max(dp[j], dp[j - w[i]] + v[i]);
```

### **为什么顺序？**
因为物品无限，正序遍历允许`dp[j - w[i]]`可能已经包含了当前物品，从而实现重复选取。

### 代码模板
```cpp
#include <iostream>
#include <vector>
using namespace std;

void solve() {
    int N,V; // N表示物品数量，V表示背包容量
    cin >> N >> V;
    vector<int> w(N), v(N); // w[i]表示第i个物品的重量，v[i]表示第i个物品的价值
    for(int i = 0;i < N;++i) cin >> w[i] >> v[i];
    vector<int> dp(V + 1,0); // dp[j]表示容量为j的背包所能获得的最大价值
    for(int i = 0;i < N;++i) {
        for(int j = w[i];j <= V;++j) { // 正序遍历，保证每个物品可以被选择多次
            dp[j] = max(dp[j],dp[j - w[i]] + v[i]);
        }
    }
    cout << dp[V] << "\n";
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

## 3. 多重背包

### 问题描述：
有`N`种物品，每种物品有重量`w[i]`，价值`v[i]`，背包容量`V`。每件物品**有固定数量**`s[i]`件（即最多选是`s[i]`次），求最大总价值。

### 二进制拆分优化（核心技巧）
如果直接拆成`s[i]`件独立的物品做`01`背包，太大。
**二进制拆分**的思想：把`s[i]`拆成若干个**`2`的幂次**的和，使这些数能够组合出`0 ~ s[i]`中任意一个数。
这样每种物品被拆成`O(log s[i])`个“新物品”，然后做`01`背包。

### 代码模板
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void solve() {
    int N,V; 
    cin >> N >> V;
    vector<int> w, v; // 存放拆分后的物品重量和价值
    for(int i = 0;i < N;++i) {
        int wi, vi, s;
        cin >> wi >> vi >> s;
        int k = 1;
        while(s > 0) { // 二进制拆分
            int take = min(k, s); // take表示当前拆分的数量，不能超过剩余数量s
            w.push_back(wi * take);
            v.push_back(vi * take);
            s -= take;
            k <<= 1; // k *= 2
        }
    }
    vector<int> dp(V + 1,0); // dp[j]表示容量为j的背包所能获得的最大价值
    for(int i = 0;i < w.size();++i) {
        for(int j = V;j >= w[i];--j) { // 逆序遍历，保证每个物品只能被选择一次
            dp[j] = max(dp[j],dp[j - w[i]] + v[i]);
        }
    }
    cout << dp[V] << "\n";
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

## 4. 分组背包

### 问题描述：
有`N`组物品，每组内有若干件物品,**每组最多只能选一件**。背包容量为`V`。每件物品有重量`w`和价值`v`，求最大总价值。

### 转移方程（一维）
```cpp
for (int k = 1; k <= N; k++) {              // 遍历每一组
    for (int j = V; j >= 0; j--) {          // 容量逆序
        for (int i = 0; i < group[k].size(); i++) { // 组内物品
            int weight = group[k][i].w;
            int value = group[k][i].v;
            if (j >= weight) {
                dp[j] = max(dp[j], dp[j - weight] + value);
            }
        }
    }
}
```

### 代码模板
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

void solve() {
    int N,V; // N表示组数，V表示背包容量
    cin >> N >> V;
    vector<int> s(N); // s[i]表示第i组物品的数量
    vector<vector<int>> w(N), v(N); // w[i][j]表示第i组第j个物品的重量，v[i][j]表示第i组第j个物品的价值
    for(int i = 0;i < N;++i) {
        cin >> s[i];
        w[i].resize(s[i]);
        v[i].resize(s[i]);
        for(int j = 0;j < s[i];++j) cin >> w[i][j] >> v[i][j];
    }
    vector<int> dp(V + 1,0); // dp[j]表示容量为j的背包所能获得的最大价值
    for(int i = 0;i < N;++i) {
        for(int j = V;j >= 0;--j) { // 逆序遍历，保证每组物品只能被选择一次
            for(int k = 0;k < s[i];++k) { // 遍历第i组的所有物品
                if(j >= w[i][k]) dp[j] = max(dp[j],dp[j - w[i][k]] + v[i][k]);
            }
        }
    }
    cout << dp[V] << "\n";
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

## 总结
这四种背包构成了DP中“资源分配”问题的核心骨架：
· 01背包是基础，学会它，其他背包是它的变种
· 完全背包只是把逆序改成了正序
· 多重背包用二进制拆分转化为01背包
· 分组背包把容量循环提到组内物品循环之前