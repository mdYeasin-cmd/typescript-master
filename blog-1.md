# Why is `any` labeled a "type safety hole" and why is `unknown` the safer choice for handling unpredictable data? Explain the concept of type narrowing.

## `any` as a “Type Safety Hole”

In TypeScript, `any` is labeled a **“type safety hole”** because it bypasses static type checking, which is not good for an application. It skips type checking, allowing variables of this type to be assigned any value without causing compilation errors. Though this freedom can be handy, it means you lose the advantages of static typing.

The compiler will not complain about the type. You can assign any type of value when you set the type as `any`, which breaks TypeScript’s static type-checking feature.

```ts
let name: any;

name = "Yeasin";
name = 111; // It should give a compilation error, but since I used the `any` type, TypeScript does not complain because a name should not be a number.
name = false; // It should give a compilation error, but since I used the `any` type, TypeScript does not complain because a name should not be a boolean.
```

So, this does not provide type-safe code. A user can put any type of data here, which is why `any` is labeled as a **“type safety hole.”**

---

## Why `unknown` is Safer

The `unknown` type is a safer choice than `any`. When a variable is of type `unknown`, TypeScript forces you to check the type before you can use that variable. This makes developers clearly state their assumptions, which helps avoid runtime errors.

The `unknown` type helps developers safely handle uncertain user input. Before performing operations, you must first confirm the value's actual type.

```ts
function calculateDiscount(price: unknown): number | string {
  if (typeof price === "number") {
    return price - 10;
  } else {
    return "Invalid input";
  }
}

console.log(calculateDiscount(100));
console.log(calculateDiscount("100"));
```

Here, TypeScript ensures that subtraction only happens when the value is truly a number.

---

# What is Type Narrowing?

Type narrowing is the process of making a broad type more specific so TypeScript can safely allow operations related to that type.

This is achieved through techniques like:

- `typeof` guards
- `instanceof` checks
- Property existence checks

These techniques enable more precise typing and help avoid type-related errors during code execution.

We can narrow down unknown types like:

- objects
- non-null objects
- objects containing specific properties such as `name`

---

## Common Type Narrowing Techniques

### 1. `typeof`

```ts
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

printValue("hello");
printValue(10);
```

In this example:

- Inside the `if` block, TypeScript knows `value` is a `string`
- Inside the `else` block, TypeScript knows `value` is a `number`

This is called **type narrowing**.

---

## Conclusion

When using TypeScript, you can use `unknown` when you want to be very careful with your code and ensure everything is the correct type. `any` is used when you want more flexibility, but it can make your code less safe.

You should think carefully about which one to use depending on your application’s requirements and how confident you are about the types and safety of your code.

Type narrowing helps TypeScript understand types more precisely, making your code more type-safe and reducing runtime errors.
