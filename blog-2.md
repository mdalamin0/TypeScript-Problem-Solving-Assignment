<!-- Question -->
#### How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

-------------

<!-- Answer -->

# Generic ব্যাবহার করে কিভাবে আমরা reusable component বা function বানাতে পারি strictly type safety সহকারে এবং Duplicate কোড না লিখে।
 
আমরা যখন একটা function লিখি তখন দেখা যায় সেই ফাংশনে নির্দিষ্ট একটা টাইপ ডিফাইন করে দিলে সেটা ব্যাতিত অন্য কিছু দেওয়া যায় না। যেমন আমি যদি একটা ফাংশন লিখি যেটা string ইনপুট নিবে এবং টাইপ হবে string, তাহলে সেটাতে আমি পরবর্তীতে যদি দরকার হয় যে number ইনপুট নিতে হবে তাহলে আমি পারবো না। এই সমস্যার সমাধান হিসেবে আমরা typescript এ খুব powerful ভাবে generic ব্যাবহার করতে পারি।  যেখানে আমরা যে কোন টাইপের ডাটা dynamic ভাবে পাঠাতে পারবো এবং এতে কোন type safety নষ্ট হবে না।

## ব্যাখ্যা (Body)
 ধরা যাক আমার একটা ফাংশন আছে যেটা string ইনপুট নিবে। যেমনঃ
 ```ts
function showData(input: string) {
  return input;
}
showData("Hello ")
```

এখন উপরের এই ফাংশনে যদি আমি নাম্বার ইনপুট দেই তাহলে সে নিবে না error দিবে, কারণ string টাইপে নাম্বার ইনপুট দেওয়া যাবে না। 
তাহলে এখানে আমার নাম্বার ইনপুটের জন্য আবার আলাদাভাবে ফাংশন বানাতে হবে। যেমনঃ

 ```ts
function showData(input: number) {
  return input;
}
showData(100)
```
এখন আবার সমস্যা হচ্ছে এই ফাংশনে যদি আমার ইনপুট হিসেবে  নাম্বার টাইপের ডাটা ছাড়া অন্য কোন ডাটা যেমন object বা boolean দরকার হয় তাহলে এসব কিছুই নিতে পারবো না কারণ টাইপ ডিফাইন করা আছে number.

এই সব সমস্যার সমাধান হিসেবে আমরা typescript এ খুব powerful ভাবে generic ব্যাবহার করতে পারি। যেখানে আমরা যে কোন টাইপের ডাটা dynamic ভাবে পাঠাতে পারবো এবং এতে কোন type safety নষ্ট হবে না। যেমনঃ

### Generic এর ব্যাবহার

 ```ts
function showData <T> (input: T) {
  return input;
}
showData<number>(100)
showData<string>("Hello")
showData<boolean>(true)
```

এখানে আমরা সব রকমের  টাইপের ডাটা পাঠাতে পারবো strictly type safety সহকারে এবং সবকিছু কাজ করবে। এতে আমাদের আলাদা আলাদা function লিখার প্রয়োজন হচ্ছে না, একটা function কেই reuse করতে পারতেছি এবং Duplicate কোড লিখতে হচ্ছে না।


## Conclusion
--------
Generics এমন reusable function/component বানাতে সাহায্য করে যেগুলো different data type এর সাথে কাজ করলেও type safety নষ্ট হয় না। বরং আমরা duplicated কোড লেখা রোধ করতে পারি এবং আলাদা আলাদা টাইপের ডাটা একটা ফাংশনেই পাঠাতে পারি।

