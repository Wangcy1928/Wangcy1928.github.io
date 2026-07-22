---
title: 图论之Kruskal
date: 2026-07-22 21:01:17
categories: [算法]
tags: [图论, 最小生成树, Kruskal, Prim, 重构树, 次小生成树]
---

## 问题描述

给定一个带权连通图，求一棵生成树，使得树上所有边的权值之和最小，称为**最小生成树（MST）**。

---

## Kruskal 算法

### 适用场景
- 边数较少的图（稀疏图）
- 时间复杂度：`O(E log E)`

### 核心思想
贪心 + 并查集：将所有边按权值从小到大排序，依次加入，若两端点不在同一连通块则合并。

### 代码模板
```cpp
#include <bits/stdc++.h>
using namespace std;

// ---------- 并查集（DSU） ----------
struct DSU {
    vector<int> parent, rnk; // parent[i] -> i的父节点, rnk[i] -> 以i为根的树的高度
    DSU(int n = 0) { init(n); }
    void init(int n) {
        parent.resize(n + 1);
        rnk.assign(n + 1, 0);
        for (int i = 1; i <= n; ++i) parent[i] = i;
    }
    int find(int x) {
        return parent[x] == x ? x : parent[x] = find(parent[x]); // 路径压缩
    }
    bool unite(int a, int b) {
        a = find(a), b = find(b);
        if (a == b) return false;
        if (rnk[a] < rnk[b]) swap(a, b);
        parent[b] = a;
        if (rnk[a] == rnk[b]) rnk[a]++;
        return true;
    }
};
// ---------- 边结构 ----------
struct Edge {
    int u, v, w;
    bool operator<(const Edge& other) const {
        return w < other.w;
    }
};

void solve() {
    int N, M;
    cin >> N >> M;
    vector<Edge> edges(M);
    for (int i = 0; i < M; ++i) {
        cin >> edges[i].u >> edges[i].v >> edges[i].w;
    }
    sort(edges.begin(), edges.end());
    DSU dsu(N);
    long long ans = 0;
    int cnt = 0;
    for (const Edge& e : edges) {
        if (dsu.unite(e.u, e.v)) {
            ans += e.w;
            cnt++;
            if (cnt == N - 1) break;
        }
    }
    if (cnt == N - 1) {
        cout << ans << '\n';
    } else {
        cout << "orz\n"; // 图不连通
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int t = 1;
    // cin >> t;
    while (t--) solve();
    return 0;
}
```

---

## 最大生成树

### 核心思想
只需将 Kruskal 的排序改为**从大到小**即可。

### 代码模板（仅改变排序方向）
```cpp
sort(edges.begin(), edges.end(), [](const Edge& a, const Edge& b) {
    return a.w > b.w; // 从大到小
});
```

## 最小生成森林

### 适用场景
图不连通时，Kruskal 跑完得到的就是**最小生成森林**（每个连通块各自的最小生成树）。

### 核心思想
**·** 跑完 Kruskal 后，统计合并次数 cnt。
**·** 如果 cnt < N - 1，说明图不连通，剩余部分构成森林。
**·** 每个连通块内的边权之和即为该块的最小生成树权值。

### 代码模板
```cpp
#include <bits/stdc++.h>
using namespace std;

// ---------- 并查集（DSU） ----------
struct DSU {
    vector<int> parent, rnk; // parent[i] -> i的父节点, rnk[i] -> 以i为根的树高度
    DSU(int n = 0) { init(n); }
    void init(int n) {
        parent.resize(n + 1);
        rnk.assign(n + 1, 0);
        for (int i = 1; i <= n; ++i) parent[i] = i;
    }
    int find(int x) {
        return parent[x] == x ? x : parent[x] = find(parent[x]); // 路径压缩
    }
    bool unite(int a, int b) {
        a = find(a), b = find(b);
        if (a == b) return false;
        if (rnk[a] < rnk[b]) swap(a, b);
        parent[b] = a;
        if (rnk[a] == rnk[b]) rnk[a]++;
        return true;
    }
};


struct Edge {
    int u, v, w;
    bool operator<(const Edge& other) const {
        return w < other.w;
    }
};

void solve() {
    int N, M;
    cin >> N >> M;
    vector<Edge> edges(M);
    for (int i = 0; i < M; ++i) {
        cin >> edges[i].u >> edges[i].v >> edges[i].w;
    }
    sort(edges.begin(), edges.end());
    DSU dsu(N);
    vector<bool> used(M, false); // 记录每条边是否被选入森林
    long long total_weight = 0;  // 森林总权值
    int cnt = 0;                 // 已选边数
    for (int i = 0; i < M; ++i) {
        if (dsu.unite(edges[i].u, edges[i].v)) {
            used[i] = true;
            total_weight += edges[i].w;
            cnt++;
            // 注意：不 break！要跑完所有边，形成森林
        }
    }
    // 情况1：图连通 -> 输出最小生成树总权值
    if (cnt == N - 1) {
        cout << "连通，MST总权值 = " << total_weight << '\n';
    } 
    // 情况2：图不连通 -> 输出最小生成森林信息
    else {
        cout << "图不连通，最小生成森林由 " << (N - cnt) << " 个连通块组成\n";
        cout << "森林总权值 = " << total_weight << '\n';

        // 可选：输出每个连通块的信息
        // 统计每个连通块的根节点
        vector<vector<int>> components(N + 1);
        for (int i = 1; i <= N; ++i) {
            components[dsu.find(i)].push_back(i);
        }
        cout << "各连通块节点：\n";
        for (int i = 1; i <= N; ++i) {
            if (!components[i].empty()) {
                cout << "  块" << i << "：";
                for (int x : components[i]) cout << x << ' ';
                cout << '\n';
            }
        }
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int t = 1;
    // cin >> t; 
    while (t--) solve();
    return 0;
}
```

---

## 次小生成树

### 问题描述
求一棵生成树，其权值和**严格大于**最小生成树，且在所有这样的生成树中权值最小。

### 核心思想
**·** 先求出 MST，并记录树边。
**·** 枚举每条**非树边** (u, v, w)，用它替换 MST 中 u 到 v 路径上的最大边，取最小值。
**·** 预处理：DFS / 倍增求 MST 上任意两点路径的最大边和次大边（用于处理严格次小）。

### 代码模板
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Edge {
    int u, v, w;
    bool in_mst;
    bool operator<(const Edge& other) const {
        return w < other.w;
    }
};

struct DSU {
    vector<int> parent, rnk;
    DSU(int n = 0) { init(n); }
    void init(int n) {
        parent.resize(n + 1);
        rnk.assign(n + 1, 0);
        for (int i = 1; i <= n; ++i) parent[i] = i;
    }
    int find(int x) {
        return parent[x] == x ? x : parent[x] = find(parent[x]);
    }
    bool unite(int a, int b) {
        a = find(a), b = find(b);
        if (a == b) return false;
        if (rnk[a] < rnk[b]) swap(a, b);
        parent[b] = a;
        if (rnk[a] == rnk[b]) rnk[a]++;
        return true;
    }
};

const int LOG = 20;
const long long INF = 4e18;

void solve() {
    int N, M;
    cin >> N >> M;
    vector<Edge> edges(M);
    for (int i = 0; i < M; ++i) {
        cin >> edges[i].u >> edges[i].v >> edges[i].w;
        edges[i].in_mst = false;
    }
    sort(edges.begin(), edges.end());
    DSU dsu(N);
    vector<vector<pair<int, int>>> tree(N + 1);
    long long mst_weight = 0;
    int cnt = 0;
    for (auto& e : edges) {
        if (dsu.unite(e.u, e.v)) {
            e.in_mst = true;
            mst_weight += e.w;
            tree[e.u].push_back({e.v, e.w});
            tree[e.v].push_back({e.u, e.w});
            ++cnt;
            if (cnt == N - 1) break;
        }
    }
    // 倍增预处理（略，参考之前完整版）
    // ...
    long long ans = INF;
    for (auto& e : edges) {
        if (e.in_mst) continue;
        // 查询 e.u 到 e.v 路径上的最大边权
        // ans = min(ans, mst_weight - max_w + e.w);
    }
    cout << ans << '\n';
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int t = 1;
    // cin >> t;
    while (t--) solve();
    return 0;
}
```

---

## Borůvka 算法

### 适用场景
**·** 求解最小生成树的并行算法
**·** 在某些特定问题中复杂度更低，如完全图 MST
**·** 竞赛中较少直接考察，但可作为优化手段。

### 核心思想
1.初始时每个点都是一个连通块。
2.每一轮，为每个连通块找到连接它的权值最小的边（只考虑连接不同连通块的边）。
3.将所有选中的边加入 MST。
4.重复直到只剩一个连通块。

### 代码模板
```cpp
void boruvka() {
    DSU dsu(N);
    int cnt = N;
    while (cnt > 1) {
        vector<int> best(N + 1, -1);
        for (int i = 0; i < M; ++i) {
            int fu = dsu.find(edges[i].u);
            int fv = dsu.find(edges[i].v);
            if (fu == fv) continue;
            if (best[fu] == -1 || edges[i].w < edges[best[fu]].w) {
                best[fu] = i;
            }
            if (best[fv] == -1 || edges[i].w < edges[best[fv]].w) {
                best[fv] = i;
            }
        }
        for (int i = 1; i <= N; ++i) {
            if (best[i] != -1) {
                if (dsu.unite(edges[best[i]].u, edges[best[i]].v)) {
                    ans += edges[best[i]].w;
                    --cnt;
                }
            }
        }
    }
}
```
