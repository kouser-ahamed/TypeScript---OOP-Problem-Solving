# Type Narrowing in TypeScript: Writing Safer Code with typeof, instanceof, and in

## Introduction

Type narrowing is the process of refining a broad type into a more specific one inside a block of code. TypeScript's control flow analysis does this automatically when you use checks like `typeof`, `instanceof`, and `in`. It lets you work safely with union types without unsafe type assertions.

---

## Why Narrowing Matters

Without narrowing, calling `value.toUpperCase()` on `string | number` causes a compile error. Narrowing proves to the compiler that the call is safe.

---

## Narrowing with `typeof`

The `typeof` operator is best for primitive types such as `string`, `number`, and `boolean`. Inside each branch, TypeScript knows the exact type.

```typescript
function format(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
```

## Narrowing with `instanceof`

Use `instanceof` to check whether a value is an instance of a class. This is ideal for built-in classes like `Date` and `Error`.

```typescript
function show(input: Date | string): string {
  if (input instanceof Date) {
    return input.toISOString();
  }
  return input;
}
```

## Narrowing with `in`

The `in` operator checks whether a property exists on an object, which helps separate object types. TypeScript then treats each branch as the matching type.

```typescript
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function speak(pet: Dog | Cat): void {
  if ("bark" in pet) {
    pet.bark();
  } else {
    pet.meow();
  }
}
```

---

## Conclusion

Type narrowing removes the need for risky type assertions and makes union types practical. Use `typeof` for primitives, `instanceof` for classes, and `in` for object shapes. Together, they help you write code that is safe, readable, and easy to maintain.