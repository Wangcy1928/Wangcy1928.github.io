---
title: 图论之Dijkstra
date: 2026-07-22 21:00:46
categories: [算法]
tags: [图论, 最短路, Dijkstra, 分层图, A*, 双向BFS]
---

## 问题描述

给定一个带权有向图（或无向图），求从源点 `s` 到所有其他点的最短路径长度。
- 边权 **非负**：使用 Dijkstra 算法。
- 边权 **可以为负**（但无负环）：使用 SPFA 或 Bellman-Ford。

---

## 堆优化 Dijkstra

### 适用场景
- 边权 **非负**
- 单源最短路
- 时间复杂度：`O(E log V)`

### 核心思想
贪心：每次从已确定最短路的点中，取出距离最小的点，用它去松弛相邻点。

### 转移方程（松弛操作）
```cpp
if (dist[v] > dist[u] + w) {
    dist[v] = dist[u] + w;
}
```

### 代码模板
```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef pair<ll, int> P; // first: 距离, second: 节点编号

void solve() {
    int n, m, s, t;
    cin >> n >> m >> s >> t;
    // 1. 建图（邻接表）
    vector<vector<pair<int, ll>>> g(n + 1);
    for (int i = 0; i < m; ++i) {
        int a, b;
        ll v;
        cin >> a >> b >> v;
        g[a].push_back({b, v});
        g[b].push_back({a, v}); // 如果是“有向图”，删掉这一行
    }
    // 2. 初始化距离数组
    const ll INF = 4e18;
    vector<ll> dist(n + 1, INF); // 记录目前已知的、去每个站的最短距离（初始全是问号）
    priority_queue<P, vector<P>, greater<P>> pq; //按距离排序,最近的在最上面
    dist[s] = 0;
    pq.push({0, s});
    // 3. 核心松弛操作
    while (!pq.empty()) {
        auto [d, u] = pq.top(); // 取出最近的距离 及 对应站点
        pq.pop();
        // 如果当前弹出的不是最新记录，跳过（防止旧数据重复处理）
        if (d != dist[u]) continue;
        for (auto [v, w] : g[u]) {
            if (dist[v] > dist[u] + w) { // 找到一条比记录的更近的路
                dist[v] = dist[u] + w; 
                pq.push({dist[v], v});
            }
        }
    }
    // 4. 输出结果
    if (dist[t] == INF) cout << -1 << '\n';
    else cout << dist[t] << '\n';
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    solve();
    return 0;
}
```

---

## 分层图最短路

### 适用场景
可以**免费/花费**走`K`条特殊边，或者状态有多个阶段（如“油量”、“电梯楼层”等）。

### 核心思想
将原图复制`K+1`层，层间用权值为`0`或特定值的边连接，表示使用一次特殊操作。跑一次 Dijkstra 即可。

### 建图方式（以“K次免费边”为例）
**·** 原图每一条边`（u,v,w）`：
    · 同一层内连边：`（u,v,w），（v,u,w）`
    · 层间连边：`（u,v,0），（v,u,0）`————表示一次免费机会
**·** 节点编号：`id(u, k) = u + k * n，k`表示当前层

### 代码模板：
```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef pair<ll, int> P;

void solve() {
    int n, m, K, s, t;
    cin >> n >> m >> K >> s >> t;
    vector<vector<pair<int, ll>>> base_g(n + 1);
    for (int i = 0; i < m; ++i) {
        int u, v;
        ll w;
        cin >> u >> v >> w;
        base_g[u].push_back({v, w});
        base_g[v].push_back({u, w});
    }
    int N = n * (K + 1);
    vector<vector<pair<int, ll>>> g(N + 1);
    for (int u = 1; u <= n; ++u) {
        for (auto [v, w] : base_g[u]) {
            for (int k = 0; k <= K; ++k) {
                int id_u = u + k * n;
                int id_v = v + k * n;
                // 层内边
                g[id_u].push_back({id_v, w});
                // 层间边（使用一次免费）
                if (k < K) {
                    int id_next = v + (k + 1) * n;
                    g[id_u].push_back({id_next, 0});
                }
            }
        }
    }
    const ll INF = 4e18;
    vector<ll> dist(N + 1, INF);
    priority_queue<P, vector<P>, greater<P>> pq;
    dist[s] = 0;
    pq.push({0, s});
    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();
        if (d != dist[u]) continue;
        for (auto [v, w] : g[u]) {
            if (dist[v] > dist[u] + w) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    ll ans = INF;
    for (int k = 0; k <= K; ++k) ans = min(ans, dist[t + k * n]);
    cout << (ans == INF ? -1 : ans) << '\n';
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    solve();
    return 0;
}
```

---

## 带限制的最短路

### 适用场景
题目在最短路径基础上增加额外约束，例如：
**·** 求最短路径条数（计数）
**·** 求最大点权和（在最短路径中找点权和最大的）
**·** 多约束最短路

### 核心思想
在`dist`数组中增加维度来维护额外状态，转移时同时更新多个约束。

### 代码模板（以求最短路径条数为例）
```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef pair<ll, int> P;

void solve() {
    int n, m, s;
    cin >> n >> m >> s;
    vector<vector<pair<int, ll>>> g(n + 1);
    for (int i = 0; i < m; ++i) {
        int u, v;
        ll w;
        cin >> u >> v >> w;
        g[u].push_back({v, w});
        g[v].push_back({u, w});
    }
    const ll INF = 4e18;
    vector<ll> dist(n + 1, INF);
    vector<int> cnt(n + 1, 0);
    priority_queue<P, vector<P>, greater<P>> pq;
    dist[s] = 0;
    cnt[s] = 1;
    pq.push({0, s});
    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();
        if (d != dist[u]) continue;
        for (auto [v, w] : g[u]) {
            if (dist[v] > dist[u] + w) {
                dist[v] = dist[u] + w;
                cnt[v] = cnt[u];
                pq.push({dist[v], v});
            } else if (dist[v] == dist[u] + w) {
                cnt[v] += cnt[u];
            }
        }
    }
    for (int i = 1; i <= n; ++i) cout << dist[i] << ' ' << cnt[i] << '\n';
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    solve();
    return 0;
}
```

---

## A*算法（K短路）

### 适用场景
**·** 求第 K 短路径
**·** 启发式搜索
**·** 核心公式：`f(n) = g(n) + h(n)`
    · `g(n)`：从起点到当前点的实际距离
    · `h(n)`：从当前点到终点的估计距离（通常为反向图的最短路）

### 核心思想
用优先队列按`f(n)`排序，优先扩展估值更小的点。当终点第`K`次出队时，即为第`K`短路。

### 代码模板
```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef pair<ll, int> P;
typedef pair<ll, pair<ll, int>> P3; // {f, {g, u}}

const ll INF = 4e18;

// 预处理反向图最短路
vector<ll> dijkstra(int n, vector<vector<pair<int, ll>>>& g, int s) {
    vector<ll> dist(n + 1, INF);
    priority_queue<P, vector<P>, greater<P>> pq;
    dist[s] = 0;
    pq.push({0, s});
    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();
        if (d != dist[u]) continue;
        for (auto [v, w] : g[u]) {
            if (dist[v] > dist[u] + w) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}

void solve() {
    int n, m, s, t, K;
    cin >> n >> m >> s >> t >> K;
    vector<vector<pair<int, ll>>> g(n + 1), rg(n + 1);
    for (int i = 0; i < m; ++i) {
        int u, v;
        ll w;
        cin >> u >> v >> w;
        g[u].push_back({v, w});
        rg[v].push_back({u, w}); // 反向图
    }
    vector<ll> h = dijkstra(n, rg, t);
    if (h[s] == INF) {
        cout << -1 << '\n';
        return;
    }
    priority_queue<P3, vector<P3>, greater<P3>> pq;
    pq.push({h[s], {0, s}});
    int cnt = 0;
    while (!pq.empty()) {
        auto [f, cur] = pq.top();
        pq.pop();
        auto [g_val, u] = cur;
        if (u == t) {
            ++cnt;
            if (cnt == K) {
                cout << g_val << '\n';
                return;
            }
        }
        for (auto [v, w] : g[u]) {
            ll ng = g_val + w;
            ll nf = ng + h[v];
            pq.push({nf, {ng, v}});
        }
    }
    cout << -1 << '\n';
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    solve();
    return 0;
}
```

---

## 双向 Dijkstra

### 适用场景
**·** 起点和终点都确定的单源最短路
**·** 在网格图等大规模图中效果显著
**·** 搜索空间从 `O(b^d) 降至 O(b^{d/2})`

### 核心思想
从起点和终点**同时**进行 Dijkstra，每次扩展距离更小的一侧，直到两侧相遇。

### 代码模板
```cpp
#include <bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef pair<ll, int> P;

const ll INF = 4e18;

void solve() {
    int n, m, s, t;
    cin >> n >> m >> s >> t;
    vector<vector<pair<int, ll>>> g(n + 1);
    for (int i = 0; i < m; ++i) {
        int u, v;
        ll w;
        cin >> u >> v >> w;
        g[u].push_back({v, w});
        g[v].push_back({u, w});
    }
    vector<ll> dist_s(n + 1, INF), dist_t(n + 1, INF);
    vector<bool> vis_s(n + 1, false), vis_t(n + 1, false);
    priority_queue<P, vector<P>, greater<P>> pq_s, pq_t;
    dist_s[s] = 0;
    dist_t[t] = 0;
    pq_s.push({0, s});
    pq_t.push({0, t});
    ll ans = INF;
    while (!pq_s.empty() && !pq_t.empty()) {
        if (pq_s.top().first <= pq_t.top().first) {
            auto [d, u] = pq_s.top();
            pq_s.pop();
            if (vis_s[u]) continue;
            vis_s[u] = true;
            if (vis_t[u]) ans = min(ans, dist_s[u] + dist_t[u]);
            for (auto [v, w] : g[u]) {
                if (!vis_s[v] && dist_s[v] > dist_s[u] + w) {
                    dist_s[v] = dist_s[u] + w;
                    pq_s.push({dist_s[v], v});
                }
            }
        } 
        else {
            auto [d, u] = pq_t.top();
            pq_t.pop();
            if (vis_t[u]) continue;
            vis_t[u] = true;
            if (vis_s[u]) {
                ans = min(ans, dist_s[u] + dist_t[u]);
            }
            for (auto [v, w] : g[u]) {
                if (!vis_t[v] && dist_t[v] > dist_t[u] + w) {
                    dist_t[v] = dist_t[u] + w;
                    pq_t.push({dist_t[v], v});
                }
            }
        }
    }
    cout << (ans == INF ? -1 : ans) << '\n';
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    solve();
    return 0;
}
```
