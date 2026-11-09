# TypeScript & OOP Problem Solving

This repository contains solutions to TypeScript problem-solving tasks covering core language features, type safety, generics, Object-Oriented Programming (OOP), and asynchronous operations, along with two technical blog articles.

---

## 📋 Assignment Overview

The assignment is organized into two parts: practical problem-solving implementations and technical blog posts.

### 1. Problem Solving (`solutions.ts`)

The [`solutions.ts`](./solutions.ts) file contains implementations addressing various TypeScript programming challenges:

- **Problem 1 – Optional Parameters (`multiplyValue`)**: Multiplies a number by an optional multiplier, defaulting to 2 if omitted.
- **Problem 2 – Union Types & Type Narrowing (`processInput`)**: Handles inputs of type `string | number | boolean` using `typeof` narrowing to return transformed results.
- **Problem 3 – Readonly Tuples (`formatCoordinate`)**: Formats geographical coordinate tuples `readonly [number, number, string]` into human-readable strings.
- **Problem 4 – Generics & Rest Parameters (`concatenateArrays`)**: Merges multiple generic arrays of type `T[]` into a single combined array.
- **Problem 5 – Interfaces & Array Filtering (`getPopularCourses`)**: Uses a `Course` interface to filter published courses meeting a minimum student enrollment threshold.
- **Problem 6 – Generics with `keyof` Constraints (`pluckValues`)**: Extracts values for a specified property key across an array of objects while preserving type safety.
- **Problem 7 – OOP Inheritance & Access Modifiers (`Employee` & `Manager`)**: Demonstrates class inheritance, constructor chaining via `super()`, and access modifiers (`protected`, `private`).
- **Problem 8 – Asynchronous Operations & Promises (`validateAgeAsync`)**: Validates age using asynchronous `Promise` handling, rejecting when under 18 and resolving after a simulated delay.

---

## 📝 Technical Blog Posts

In-depth technical write-ups exploring fundamental TypeScript concepts:

1. **[Type Narrowing in TypeScript: Writing Safer Code with typeof, instanceof, and in](./type-narrowing.md)**  
   An exploration of control flow analysis and how type narrowing techniques (`typeof`, `instanceof`, and `in`) allow developers to work safely with union types without risky type assertions.

2. **[Type Aliases vs Interfaces in TypeScript: Which One Should You Use?](./type-vs-interface.md)**  
   A comparison between TypeScript's `type` aliases and `interface` declarations, examining declaration merging, type flexibility, extension syntax, and best practices for choosing the right tool.

---

## 📁 Repository Structure

```text
├── solutions.ts            # Implementations for the TypeScript problems
├── type-narrowing.md       # Blog: Type Narrowing in TypeScript
├── type-vs-interface.md    # Blog: Type Aliases vs Interfaces
└── README.md               # Assignment overview and documentation
```
