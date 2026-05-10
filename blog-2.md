# How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

TypeScript provides built-in utility types called `Pick` and `Omit` that allow developers to reuse existing interfaces efficiently. `Pick` extracts only the required properties from a larger interface, whereas `Omit` removes unwanted properties from it. By using these utility types, developers can follow the **DRY (Don't Repeat Yourself)** principle and avoid rewriting similar interfaces multiple times.

---

# Pick in TypeScript

The `Pick` utility type in TypeScript is used to create a new type by selecting properties from an existing interface or type. Instead of rewriting the same properties again and again, developers can simply “pick” the properties they need from a master interface.

## Syntax

```ts
Pick<Type, Keys>;
```

- `Type` → The original interface or type
- `Keys` → The properties you want to select

## Example

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}
```

Suppose we want to create a public user type where only `id`, `name`, and `email` are needed.

```ts
type PublicUser = Pick<User, "id" | "name" | "email">;
```

Now the `PublicUser` type will look like this:

```ts
type PublicUser = {
  id: number;
  name: string;
  email: string;
};
```

## Usage Example

```ts
const user: PublicUser = {
  id: 1,
  name: "Yeasin",
  email: "yeasin@example.com",
};
```

Without `Pick`, developers may manually create another type with the same properties, which creates unnecessary duplication.

```ts
type PublicUser = {
  id: number;
  name: string;
  email: string;
};
```

This creates duplication because if the original `User` interface changes later, developers may need to update multiple places manually.

By using `Pick`, the new type automatically stays connected to the original interface, making the code cleaner and easier to maintain.

---

# Omit in TypeScript

The `Omit` utility type in TypeScript is used to create a new type by removing specific properties from an existing interface or type. Instead of creating a completely new interface manually, developers can reuse the original interface and exclude only the unnecessary properties.

## Syntax

```ts
Omit<Type, Keys>;
```

## Example

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
}
```

Suppose we want to create a type for public user data where the password should not be included.

```ts
type PublicUser = Omit<User, "password">;
```

The new type will automatically contain all properties except `password`.

```ts
type PublicUser = {
  id: number;
  name: string;
  email: string;
  role: string;
};
```

## Why Omit is Useful

Without `Omit`, developers may create another interface manually without the excluded properties.

```ts
interface PublicUser {
  id: number;
  name: string;
  email: string;
  role: string;
}
```

This can lead to repetitive code and maintenance problems.

By using `Omit`, the new type remains connected to the original interface while removing only the unnecessary fields.

---

# How Pick and Omit Keep Code DRY

`Pick` and `Omit` help developers follow the **DRY (Don't Repeat Yourself)** principle by reducing unnecessary duplication in the codebase.

Instead of creating multiple interfaces with similar properties, developers can reuse an existing interface and simply select or exclude the properties they need.

## Benefits

- Reduces repetitive code
- Keeps related types connected
- Makes the code easier to maintain
- Improves consistency across the application
- Automatically reflects updates from the main interface
- Reduces the chance of human error

For example, if a new property is added to the main `User` interface later, related utility-based types can stay updated automatically without rewriting multiple interfaces manually.

---

# Conclusion

Using `Pick` and `Omit` makes TypeScript applications cleaner, more maintainable, and easier to scale. These utility types allow developers to create specialized “slices” of a master interface without duplicating code.

By reusing existing interfaces instead of rewriting them, developers can maintain consistency, reduce errors, and write more efficient TypeScript code while following the DRY principle.
