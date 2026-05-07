# TypeScript basic core concepts problem solving project

এই প্রজেক্টে আমি চেষ্টা করেছি যে TypeScript এর basic concept এর কিছু problem এর solution এবং TypeScript এর `utility type` related দুইটি blog explanation দেওয়ার ।

---

## 📁 File Structure

```
├── solutions.ts
├── blog-1.md
├── blog-2.md
└── README.md
```

---

## Main Contents

### solutions.ts

এই project এ আমি মোট ৭টি TypeScript problem এর solution দেওয়ার চেষ্টা করেছি ।

Topics include:

- Get filter events number from an array
- String Manipulation
- Union Types & Types Guard
- Generics Type
- keyof Operator
- Interface
- Object Update
- Class & Inheritance
- Array Intersection

---

## Blog Files

### 1. Pick and Omit Utility Types

এই blog এ explain করা হয়েছে:

- `pick` কিভাবে কাজ করে এবং কোন সমস্যাগুলো  সমাধানের জন্য  `pick` ব্যাবহার করা হয়?
- `omit` কিভাবে কাজ করে এবং কোন সমস্যাগুলো  সমাধানের জন্য  `omit` ব্যাবহার করা হয়?
- কিভাবে এগুলো code duplication কমায়
- DRY (Don't Repeat Yourself) কি এবং এই নীতি আমার কোড কিভাবে মেনে চলে?

---

### 2. Generics in TypeScript

এই blog এ explain করা হয়েছে:

`Generic` কী ?
`Generics` এমন reusable function/component বানাতে সাহায্য করে যেগুলো different data type এর সাথে কাজ করলেও type safety নষ্ট হয় না। বরং আমরা duplicated কোড লেখা রোধ করতে পারি এবং আলাদা আলাদা টাইপের ডাটা একটা ফাংশনেই পাঠাতে পারি।
