# Type Aliases vs Interfaces in TypeScript: Which One Should You Use?

## Introduction

TypeScript offers two ways to describe the shape of data: `type` aliases and `interface`. At first glance they look almost identical, but they behave differently in important ways. This guide explains the core differences with practical examples. Understanding them helps you write cleaner, safer, and more maintainable code.

---

## Core Differences

### 1. Interfaces Support Declaration Merging

An `interface` describes object shapes and can be extended using `extends`. It also supports declaration merging, so two interfaces with the same name combine automatically.

```typescript
interface User {
  name: string;
}
interface User {
  age: number;
}
const user: User = { name: "Rakib", age: 25 };
```

### 2. Types Are More Flexible

A `type` alias can name unions, tuples, primitives, and intersections, which an interface cannot express. However, a type cannot be declared twice.

```typescript
type Status = "active" | "inactive";
type Point = [number, number];
type AdminUser = User & { role: string };
```

### 3. Extending and Combining

Interfaces extend with `extends`, while types combine with `&`. Both produce similar results.

```typescript
interface Employee extends User {
  role: string;
}
```

---

## When to Choose Which

Use `interface` for object shapes, class contracts, and public library APIs, because it is easy to extend. Interfaces also give clearer error messages in large projects. Use `type` for unions, tuples, and complex combinations. As a simple rule, start with `interface` for objects and switch to `type` when you need more power.

---

## Conclusion

Both tools are powerful, and neither is strictly better. Choose `interface` for objects and classes, and `type` for everything else. Most importantly, stay consistent across your codebase.