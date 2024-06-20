// halaman redirect link
// halaman ini akan diakses ketika user mengklik link yang sudah dibeli
// halaman ini akan mengarahkan user ke halaman yang sudah dibeli
// halaman ini akan menampilkan pesan bahwa user akan diarahkan ke halaman yang sudah dibeli
// pages/shortlink.tsx
"use client";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Shortlink: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Replace this with your actual logic to generate the shortlink
    const generateShortlink = async () => {
      try {
        // Your code to create a shortlink goes here
        // For example, interacting with Google Drive API
        // ...
        const shortlink =
          "https://drive.google.com/drive/folders/1LZXc_Uz6dApkvehf0cNIYJkiKPoI95vq?usp=sharing";
        router.push(shortlink); // Redirect to the shortlink
      } catch (error) {
        console.error("Error creating shortlink:", error);
        // Handle error (e.g., show an error message)
      }
    };

    generateShortlink();
  }, []);

  return (
    <div>
      <Head>
        <title>
          Jenius Printable Bundling 2024 | 10.000+ Halaman Worksheet Anak
        </title>
        <meta
          name="description"
          content="Jenius Printable Bundling 2024 | 10.000+ Halaman Worksheet Anak Usia 2-5 Tahun! 🎉"
          key="desc"
        />
        <meta
          property="og:title"
          content="Jenius Printable Bundling 2024 | 10.000+ Halaman Worksheet Anak"
          key="og:title"
        />
        <meta
          property="og:description"
          content="Jenius Printable Bundling 2024 | 10.000+ Halaman Worksheet Anak Usia 2-5 Tahun! 🎉"
          key="og:desc"
        />
        <meta
          property="og:image"
          content="https://aniprintable.vercel.app/icon.jpeg"
          key="og:image"
        />
        <meta
          property="og:url"
          content="https://aniprintable.vercel.app"
          key="og:url"
        />
        <link rel="icon" href="/icon.png" sizes="any" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="author" content="AniPrintable" />
        <meta name="keywords" content="worksheet, printable, anak, bundling" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical"></link>
      </Head>
      <p>Creating shortlink...</p>
      {/* You can add loading spinner or other UI elements here */}
    </div>
  );
};

export default Shortlink;
