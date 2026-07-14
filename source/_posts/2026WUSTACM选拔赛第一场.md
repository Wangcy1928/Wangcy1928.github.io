---
title: 2026WUSTACM选拔赛第一场
date: 2026-07-14 16:44:28
categories: [校内选拔, 比赛总结]
tags: [ACM, 2026, 复盘]
---

## 比赛过程

### A题（签到题）
**题意**：
长度为N的两个整数序列A和B（A，B中元素互不相同），计算：
1.满足A[i] = B[i]的整数i的个数
2.满足A[i] = B[j]且i != j的整数对(i,j)的个数
输入：
第1行包含一个整数N（1 <= N <= 1000）
第2行包含N个整数A[1],A[2],···,A[N]
第3行包含N个整数B[1],B[2],···,B[N]
输出：
第1行输出（1）的答案；
第2行输出（2）的答案。

**思路**：遍历出（1）的个数，使用map映射出出现2次的数，减去（1）的个数便得出（2）的个数。

**代码**：
```cpp
#include <iostream>
#include <vector>
#include <map>
using namespace std;
 
void solve() {
    int n;
    cin >> n;
    vector<long long> a(n + 1),b(n + 1);
    map<long long,int> cnt;
    for(int i = 1;i <= n;++i) {
        cin >> a[i];
        cnt[a[i]]++;
    }
    for(int i = 1;i <= n;++i) {
        cin >> b[i];
        cnt[b[i]]++;
    }
    int ans1 = 0,ans2 = 0;
    for(int i = 1;i <= n;++i) {
        if(a[i] == b[i]) ans1++;
    }
    for(const auto& it : cnt) {
        if(it.second == 2) ans2++;
    }
    cout << ans1 << "\n";
    cout << ans2 - ans1 << "\n";
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

### H题
**题意**：
黑板上有若干个数字，所有数字只能为1、2和3。其中：“1”的个数为a，“2”的个数为b，“3”的个数为c。
可以选择以下操作：
-选择黑板上两个**不同**的数字并擦除，然后写下一个与被擦除数字都不同的新数字。
问：是否能通过若干次操作，使得黑板上最终只剩下一种数字？如果可以，具体是哪几种数字可以单独留下？
输入：
第1行包含一个整数t（1 <= t <= 1e5），表示测试用例的数量。
每个测试用例包含一行，由三个整数a，b，c（1 <= a，b，c <= 100），分别表示“1”，“2”，“3”的初始个数。
输出：
对于每个测试用例，输出一行包含3个整数（由空格隔开）：三个整数分别代表“1”，“2”，“3”是否可以留下，是就输出“1”，否则输出“0”。

**思路**：
以留下“1”为例：
·**情况1（擦1，2，写3）**：b--，c++，（b - 1）-（c + 1）=（b - c）- 2（差值奇偶性不变）
·**情况2（擦1，3，写2）**：b++，c--，（b + 1）-（c - 1）=（b - c）+ 2（差值奇偶性不变）
·**情况3（擦2，3，写1）**：b--，c--，（b - 1）-（c - 1）=（b - c）（差值奇偶性不变）
核心思路：判断另两种数字的数量之差是否为偶数。

**代码**：
```cpp
#include <iostream>
#include <cmath>
using namespace std;
 
void solve() {
    int a,b,c;
    cin >> a >> b >> c;
    int p1 = 0,p2 = 0,p3 = 0;
    int x1 = abs(b - c),x2 = abs(a - c),x3 = abs(a - b);
    if(x1 % 2 == 0) p1 = 1;
    if(x2 % 2 == 0) p2 = 1;
    if(x3 % 2 == 0) p3 = 1;
    cout << p1 << " " << p2 << " " << p3 << "\n";
}
 
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int t = 1;
    cin >> t;
    while(t--) solve();
    return 0;
}
```

---

### C题
**题意**：
“美丽数组”：对于数组A,满足从数组开头移除若干（可为0）个元素，并将这些元素按原顺序插入数组末尾，使得到的新数组是非递减有序的（任何长度为0或1的数组都是美丽数组）
现给定一个初始为空的数组a，你需要对其处理q次操作。
给定一个整数x[i]，你需要：
-如果可以将x[i]添加到a的末尾，并且添加后a仍为美丽数组，则将x[i]添加到末尾；
-否则，不做任何操作。
输入：
第1行包含一个整数t（1 <= t <= 1e4），表示测试用例的数量。
每个测试用例包含两行。第1行包含一个整数q（1 <= q <= 2e5），表示操作次数；第2行包含q个整数x[1],x[2],···,x[q](0 <= x[i] <= 1e9)。
输入的额外限制：所有测试用例中q的总和不超过2e5。
输出：
对于每个测试用例，输出一个仅包含q个字符的字符串。第i个字符表示在第i次操作中成功添加了整数，否则为0。

**思路**：整个数组显然最多只有一个“下降”位置（a[i] > a[j + 1]的情况），设定P(bool型)为判定符，初始取false，循环数组，更新出现“下降”位置前的最大值Max，当出现首个“下降”位置时，P取反且Max更新为“下降”位置的a[i]，；P取反后，显然不能超过该数组的首位元素a[1]（1基准），新元素必须满足：x >= Max && x <= a[0],满足则加入，更新Max值。

**代码**：
```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;
 
void solve() {
    int n;
    cin >> n;
    vector<long long> a(n + 1),b(1);
    string ans = "1";
    for(int i = 1;i <= n;++i) cin >> a[i];
    if(n == 1) {
        cout << ans << "\n";
        return;
    }
    b[0] = a[1];
    long long Max = a[1];
    bool P = false;
    for(int i = 2;i <= n;++i) {
        if(P == false) {
            if(a[i] >= Max) {
                Max = max(a[i],Max);
                ans += "1";
            }   
            else if(a[i] <= b[0]) {
                ans += "1";
                Max = a[i];
                P = true;
            }
            else ans += "0";
        }
        else if(P == true) {
            if(a[i] >= Max && a[i] <= b[0]) {
                ans += "1";
                Max = max(a[i],Max);
            }
            else ans += "0";
        }
    }
    cout << ans << "\n"; 
}
 
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int t = 1;
    cin >> t;
    while(t--) solve();
    return 0;
}
```