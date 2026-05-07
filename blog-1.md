<!-- Question -->
#### How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

-------------

<!-- Answer -->

# TypeScript এ Pick এবং Omit Utility Types কিভাবে একই Code কে বারবার লেখা থেকে বাঁচায়? 

আমরা যখন একটা টাইপ ইন্টারফেস লিখি সেটা দেখা যায় পরে আবার দরকার হয় কিন্তু আলাদা ভাবে যেমন Main interface থেকে কিছু নির্দিষ্ট প্রোপার্টি নিয়ে আরেকটা টাইপ বানানোর, সেক্ষেত্রে দেখা যায় সেইম টাইপ ইন্টারফেস আবার লিখতে হচ্ছে ছোট করার জন্য বা যদি এমন হয় যে একটা বড় type interface আছে সেখানের নির্দিষ্ট কিছু প্রোপার্টি বাদ দিয়ে বাকি সবগুলো আমার লাগবে সেক্ষেত্রেও দেখা যায় আমার আবার লিখতে হচ্ছে,, এভাবে একই কোড বারবার লিখতে হচ্ছে,,, এই সমস্যা সমাধানের জন্যই typescript এ utility type যেমন pick এবং omit ব্যাবহার করা হয়।

## ব্যাখ্যা
 ধরা যাক আমার একটা টাইপ ইন্টারফেস আছে যেমনঃ 
 ```ts
type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  color?: string
}
```
এখানে `Product` হলো আমাদের master বা main interface।
এখন যদি এমন হয় আমার শুধু id আর price property লাগবে তাহলে আমাকে আবার লিখতে হবে যেমন-
 ```ts
type ProductWithIdName = {
  name: string;
  price: number;
}
```
এভাবে একই কোড বারবার লিখতে হয় ।  এই সমস্যার সমাধানের জন্য আমরা `utility type` যেমন `pick` 
ব্যাবহার করতে পারি। 

### pick এর ব্যাবহার
```ts
type ProductSummury = Pick<Product, "id" | "name">
```

এখানে `pick` main interface থেকে শুধু `id` আর `name` নিয়ে একটা slice type তৈরি করে নিলো,,
একই প্রপার্টি বারবার লিখতে হলো না। 

------
আবার যদি এমন হয় আমার এটা অনেক বড় ইন্টারফেস আছে সেখান থেকে কিছু নির্দিষ্ট প্রোপার্টি বাদ দিয়ে বাকিগুলো নিয়ে একটা টাইপ দরকার সেক্ষেত্রেও আমাকে আবার লিখত হবে যেমন
### omit এর ব্যাবহার
 ```ts
type ProdutWithoutColor = Omit<Product, "color">
```

এখানে `omit` main interface থেকে শুধু `color` বাদ দিয়ে একটা slice type তৈরি করে নিলো,,
একই প্রপার্টি বারবার লিখতে হলো না। 

## Conclusion
--------
`Pick` এবং `Omit` TypeScript এর খুব powerfull utility type। এগুলোর মাধ্যমে আমরা master বা main interface থেকে প্রয়োজন অনুযায়ী  slice তৈরি করতে পারি, কোন ধরনের duplicate code লেখা ছাড়াই। 
### summury
`pick` ব্যাবহার করে আমরা নির্দিষ্ট কিছু টাইপ তুলে নিয়ে নতুন টাইপ তৈরি করতে পারি duplicate কোড ছাড়াই। 
`omit` ব্যাবহার করে আমরা মেইন interface থেকে নির্দিষ্ট কিছু প্রোপার্টি বাদ দিয়ে বাকিগুলো নিয়ে একটা টাইপ তৈরি করতে পারি duplicateকোড ছাড়াই
