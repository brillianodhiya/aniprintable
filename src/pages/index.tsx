"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const FaqList = ({ list = [] }: { list: string[] }) => {
  return (
    <ul className="space-y-3">
      {list.map((val: string, idx: number) => {
        return (
          <li className="flex space-x-3" key={val + idx}>
            <svg
              className="flex-shrink-0 size-4 mt-0.5 text-teal-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span className="text-gray-600">{val}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default function Home() {
  // State variable for managing zoomed image
  const [zoomedImage, setZoomedImage] = useState(null);
  // Function to open zoomed image
  const openZoomedImage = (imageUrl: any) => {
    setZoomedImage(imageUrl);
  };
  // Function to close zoomed image
  const closeZoomedImage = () => {
    setZoomedImage(null);
  };
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
          content="https://aniprintable.vercel.app/icon.jpg"
          key="og:image"
        />
        <meta
          property="og:url"
          content="https://aniprintable.vercel.app"
          key="og:url"
        />
        <link rel="icon" href="/icon.jpg" sizes="any" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AniPrintable" />
        <meta name="keywords" content="worksheet, printable, anak, bundling" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* announcement */}
      {/* <a
        className="group block bg-gray-100 hover:bg-gray-200 p-4 rounded-lg text-center transition-all duration-300"
       href="https://wa.me/6285262625889?text=Assalamu'alaikum Bunda Ani. Saya mau _Jenius Printable Bundling 2024_ harga *Rp.98.000*"
        target="_blank"
        rel="noopener"
      >
        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <p className="me-2 inline-block text-sm text-gray-800">
            DAPATKAN BUNDLING SEKARANG!
          </p>
          <span className="group-hover:underline decoration-2 inline-flex justify-center items-center gap-x-2 font-semibold text-yellow-500 text-sm">
            Hubungi
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </div>
      </a> */}

      {/* banner */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight">
              JENIUS PRINTABLE BUNDLING{" "}
              <span className="text-yellow-500">
                {new Date().getFullYear().toString()}
              </span>
            </h1>
            <p className="mt-3 text-lg text-gray-800">
              <span className="font-bold text-red-500 text-2xl">10.000+</span>{" "}
              Halaman Printable Worksheet Edukatif Anak Usia 2-5 Tahun! 🎉
            </p>

            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none"
                href="https://wa.me/6285262625889?text=Assalamu'alaikum Bunda Ani. Saya mau _Jenius Printable Bundling 2024_ harga *Rp.98.000*"
                target="_blank"
                rel="noopener"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="-2.73 0 1225.016 1225.016"
                  // xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    fill="#E0E0E0"
                    d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z"
                  />
                  <linearGradient
                    id="a"
                    gradientUnits="userSpaceOnUse"
                    x1="609.77"
                    y1="1190.114"
                    x2="609.77"
                    y2="21.084"
                  >
                    <stop offset="0" stopColor="#20b038" />
                    <stop offset="1" stopColor="#60d66a" />
                  </linearGradient>
                  <path
                    fill="url(#a)"
                    d="M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z"
                  />
                  <image
                    overflow="visible"
                    opacity=".08"
                    width="682"
                    height="639"
                    transform="translate(270.984 291.372)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#FFF"
                    d="M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z"
                  />
                  <path
                    fill="#FFF"
                    d="M1036.898 176.091C923.562 62.677 772.859.185 612.297.114 281.43.114 12.172 269.286 12.039 600.137 12 705.896 39.633 809.13 92.156 900.13L7 1211.067l318.203-83.438c87.672 47.812 186.383 73.008 286.836 73.047h.255.003c330.812 0 600.109-269.219 600.25-600.055.055-160.343-62.328-311.108-175.649-424.53zm-424.601 923.242h-.195c-89.539-.047-177.344-24.086-253.93-69.531l-18.227-10.805-188.828 49.508 50.414-184.039-11.875-18.867c-49.945-79.414-76.312-171.188-76.273-265.422.109-274.992 223.906-498.711 499.102-498.711 133.266.055 258.516 52 352.719 146.266 94.195 94.266 146.031 219.578 145.992 352.852-.118 274.999-223.923 498.749-498.899 498.749z"
                  />
                </svg>
                ORDER NOW!
              </a>
            </div>
            <div className="mt-7 lg:mt-14 grid">
              <blockquote className="relative max-w-lg">
                <svg
                  className="hidden md:block absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-6 text-gray-200"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>

                <div className="relative z-10">
                  <p className="text-lg italic text-gray-800">
                    Alhamdulillah puas banget sama worksheetnya. Mulai dari
                    basic banget kayak tracing garis, melengkung, dll. Banyak
                    gambar² yg anak suka jadi bocilku jadi semangat belajar.
                    Selain itu juga ada game nya. Good bgt😇 🤗
                  </p>
                </div>

                <footer className="mt-3">
                  <div className="flex items-center">
                    {/* <div className="flex-shrink-0">
                      <img
                        className="size-8 rounded-full"
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                    </div> */}
                    <div className="grow ">
                      <div className="font-semibold text-gray-800 ">
                        Bunda Oktavia
                      </div>
                      <div className="text-xs text-gray-500 ">
                        Ibu Rumah Tangga
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="relative ms-4">
            <Image
              width={800}
              height={700}
              className="w-full rounded-md"
              src="/banner.jpeg"
              alt="JENIUS PRINTABLE BUNDLING 2024"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-red-500 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6"></div>

            <div className="absolute bottom-0 start-0">
              <svg
                className="w-2/3 ms-auto h-auto text-white"
                width="630"
                height="451"
                viewBox="0 0 630 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="531"
                  y="352"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="140"
                  y="352"
                  width="106"
                  height="99"
                  fill="currentColor"
                />
                <rect
                  x="482"
                  y="402"
                  width="64"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="433"
                  y="402"
                  width="63"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="384"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="328"
                  width="50"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="303"
                  width="49"
                  height="58"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                />
                <rect
                  x="99"
                  y="392"
                  width="49"
                  height="59"
                  fill="currentColor"
                />
                <rect
                  x="44"
                  y="402"
                  width="66"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="234"
                  y="402"
                  width="62"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="334"
                  y="303"
                  width="50"
                  height="49"
                  fill="currentColor"
                />
                <rect x="581" width="49" height="49" fill="currentColor" />
                <rect x="581" width="49" height="64" fill="currentColor" />
                <rect
                  x="482"
                  y="123"
                  width="49"
                  height="49"
                  fill="currentColor"
                />
                <rect
                  x="507"
                  y="124"
                  width="49"
                  height="24"
                  fill="currentColor"
                />
                <rect
                  x="531"
                  y="49"
                  width="99"
                  height="99"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* features */}
      <div className="flex flex-col max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="aspect-w-16 aspect-h-7 order-2 lg:order-1 mt-8 lg:mt-0">
          <Image
            width={1000}
            height={1000}
            className="w-full object-cover rounded-xl h-80"
            src="/lucas-alexander-sJuDgtkUyYs-unsplash.jpg"
            alt="Unsplash Image by lucas alexander"
          />
        </div>

        <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12 order-1 lg:order-2">
          <div className="lg:col-span-1">
            <h2 className="font-bold text-2xl md:text-3xl text-gray-800">
              Punya anak usia 2-5 tahun rasanya pasti seru kan???
            </h2>
            <p className="mt-2 md:mt-4 text-gray-500">
              Apalagi keingintahuannya yang luas dan imajinasi yang luar biasa.
              <br /> Si kecil makin aktif dan ingin terus belajar, tapi
              terhalang orangtua yang kurang dalam akses memfasilitasi
              pembelajaran???
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 mt-1 size-6 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Praktis
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Tenang! sekarang ada solusi praktis untuk stimulasi si kecil
                    sekaligus membuka kesempatan baru buat para bunda punya
                    penghasilan tambahan - semuanya dari rumah aja!
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 mt-1 size-6 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="10" x="3" y="11" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" x2="8" y1="16" y2="16" />
                  <line x1="16" x2="16" y1="16" y2="16" />
                </svg>
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Kreatifitas Tanpa Batas
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Printable Worksheet Super Lengkap untuk Anak Usia 2-5 tahun!
                    Gak perlu pusing mikirin aktivitas buat si kecil selama
                    berbulan-bulan ke depan.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 mt-1 size-6 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Bisa di jual kembali!
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Super Lengkap dan Bisa Anda Jual Kembali!
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 mt-1 size-6 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M18 6H21C21.5523 6 22 6.44772 22 7V17C22 17.5523 21.5523 18 21 18H10M13 6H3C2.44772 6 2 6.44772 2 7V17C2 17.5523 2.44772 18 3 18H6M6 9.5V14.5M18 9.5V14.5M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
                    // stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Bisnis dari rumah
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Hasilkan jutaan rupiah dari jual worksheet anak tanpa perlu
                    keluar rumah!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hero */}
      <div className="overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
            <div className="text-center">
              <p className="text-md font-semibold text-gray-500 tracking-wide uppercase mb-3">
                Hal menarik dari bundling ini:
              </p>
              <h1 className="text-2xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight">
                Anda tidak hanya mendapatkan 500-600 halaman. Tapi ada
                <span className="text-red-500">
                   10.000 halaman lebih worksheet anak{" "}
                </span>
                yang bisa dijual kembali!
              </h1>
            </div>

            <div className="mx-auto">
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none"
                href="https://wa.me/6285262625889?text=Assalamu'alaikum Bunda Ani. Saya mau _Jenius Printable Bundling 2024_ harga *Rp.98.000*"
                target="_blank"
                rel="noopener"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="-2.73 0 1225.016 1225.016"
                  // xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <path
                    fill="#E0E0E0"
                    d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z"
                  />
                  <linearGradient
                    id="a"
                    gradientUnits="userSpaceOnUse"
                    x1="609.77"
                    y1="1190.114"
                    x2="609.77"
                    y2="21.084"
                  >
                    <stop offset="0" stopColor="#20b038" />
                    <stop offset="1" stopColor="#60d66a" />
                  </linearGradient>
                  <path
                    fill="url(#a)"
                    d="M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z"
                  />
                  <image
                    overflow="visible"
                    opacity=".08"
                    width="682"
                    height="639"
                    transform="translate(270.984 291.372)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#FFF"
                    d="M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z"
                  />
                  <path
                    fill="#FFF"
                    d="M1036.898 176.091C923.562 62.677 772.859.185 612.297.114 281.43.114 12.172 269.286 12.039 600.137 12 705.896 39.633 809.13 92.156 900.13L7 1211.067l318.203-83.438c87.672 47.812 186.383 73.008 286.836 73.047h.255.003c330.812 0 600.109-269.219 600.25-600.055.055-160.343-62.328-311.108-175.649-424.53zm-424.601 923.242h-.195c-89.539-.047-177.344-24.086-253.93-69.531l-18.227-10.805-188.828 49.508 50.414-184.039-11.875-18.867c-49.945-79.414-76.312-171.188-76.273-265.422.109-274.992 223.906-498.711 499.102-498.711 133.266.055 258.516 52 352.719 146.266 94.195 94.266 146.031 219.578 145.992 352.852-.118 274.999-223.923 498.749-498.899 498.749z"
                  />
                </svg>
                ORDER NOW!
              </a>
            </div>

            <div
              className="hidden absolute top-2/4 start-0 transform -translate-y-2/4 -translate-x-40 md:block lg:-translate-x-80"
              aria-hidden="true"
            >
              <svg
                className="w-52 h-auto"
                width="717"
                height="653"
                viewBox="0 0 717 653"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M170.176 228.357C177.176 230.924 184.932 227.329 187.498 220.329C190.064 213.329 186.47 205.574 179.47 203.007L170.176 228.357ZM98.6819 71.4156L85.9724 66.8638L85.8472 67.2136L85.7413 67.5698L98.6819 71.4156ZM336.169 77.9736L328.106 88.801L328.288 88.9365L328.475 89.0659L336.169 77.9736ZM616.192 128.685C620.658 122.715 619.439 114.254 613.469 109.788L516.183 37.0035C510.213 32.5371 501.753 33.756 497.286 39.726C492.82 45.696 494.039 54.1563 500.009 58.6227L586.485 123.32L521.788 209.797C517.322 215.767 518.541 224.227 524.511 228.694C530.481 233.16 538.941 231.941 543.407 225.971L616.192 128.685ZM174.823 215.682C179.47 203.007 179.475 203.009 179.48 203.011C179.482 203.012 179.486 203.013 179.489 203.014C179.493 203.016 179.496 203.017 179.498 203.018C179.501 203.019 179.498 203.018 179.488 203.014C179.469 203.007 179.425 202.99 179.357 202.964C179.222 202.912 178.991 202.822 178.673 202.694C178.035 202.437 177.047 202.026 175.768 201.456C173.206 200.314 169.498 198.543 165.106 196.099C156.27 191.182 144.942 183.693 134.609 173.352C114.397 153.124 97.7311 122.004 111.623 75.2614L85.7413 67.5698C68.4512 125.748 89.856 166.762 115.51 192.436C128.11 205.047 141.663 213.953 151.976 219.692C157.158 222.575 161.591 224.698 164.777 226.118C166.371 226.828 167.659 227.365 168.578 227.736C169.038 227.921 169.406 228.065 169.675 228.168C169.809 228.22 169.919 228.261 170.002 228.293C170.044 228.309 170.08 228.322 170.109 228.333C170.123 228.338 170.136 228.343 170.147 228.347C170.153 228.349 170.16 228.352 170.163 228.353C170.17 228.355 170.176 228.357 174.823 215.682ZM111.391 75.9674C118.596 55.8511 137.372 33.9214 170.517 28.6833C204.135 23.3705 255.531 34.7533 328.106 88.801L344.233 67.1462C268.876 11.0269 210.14 -4.91361 166.303 2.01428C121.993 9.01681 95.9904 38.8917 85.9724 66.8638L111.391 75.9674ZM328.475 89.0659C398.364 137.549 474.018 153.163 607.307 133.96L603.457 107.236C474.34 125.837 406.316 110.204 343.864 66.8813L328.475 89.0659Z"
                  fill="currentColor"
                  className="fill-gray-800"
                />
                <path
                  d="M17.863 238.22C10.4785 237.191 3.6581 242.344 2.62917 249.728C1.60024 257.113 6.75246 263.933 14.137 264.962L17.863 238.22ZM117.548 265.74L119.421 252.371L119.411 252.37L117.548 265.74ZM120.011 466.653L132.605 471.516L132.747 471.147L132.868 470.771L120.011 466.653ZM285.991 553.767C291.813 549.109 292.756 540.613 288.098 534.792L212.193 439.92C207.536 434.098 199.04 433.154 193.218 437.812C187.396 442.47 186.453 450.965 191.111 456.787L258.582 541.118L174.251 608.589C168.429 613.247 167.486 621.742 172.143 627.564C176.801 633.386 185.297 634.329 191.119 629.672L285.991 553.767ZM14.137 264.962L115.685 279.111L119.411 252.37L17.863 238.22L14.137 264.962ZM115.675 279.11C124.838 280.393 137.255 284.582 145.467 291.97C149.386 295.495 152.093 299.505 153.39 304.121C154.673 308.691 154.864 314.873 152.117 323.271L177.779 331.665C181.924 318.993 182.328 307.301 179.383 296.818C176.451 286.381 170.485 278.159 163.524 271.897C149.977 259.71 131.801 254.105 119.421 252.371L115.675 279.11ZM152.117 323.271C138.318 365.454 116.39 433.697 107.154 462.535L132.868 470.771C142.103 441.936 164.009 373.762 177.779 331.665L152.117 323.271ZM107.417 461.79C103.048 473.105 100.107 491.199 107.229 508.197C114.878 526.454 132.585 539.935 162.404 543.488L165.599 516.678C143.043 513.99 135.175 505.027 132.132 497.764C128.562 489.244 129.814 478.743 132.605 471.516L107.417 461.79ZM162.404 543.488C214.816 549.734 260.003 554.859 276.067 556.643L279.047 529.808C263.054 528.032 217.939 522.915 165.599 516.678L162.404 543.488Z"
                  fill="currentColor"
                  className="fill-orange-500"
                />
                <path
                  d="M229.298 165.61C225.217 159.371 216.85 157.621 210.61 161.702C204.371 165.783 202.621 174.15 206.702 180.39L229.298 165.61ZM703.921 410.871C711.364 410.433 717.042 404.045 716.605 396.602L709.47 275.311C709.032 267.868 702.643 262.189 695.2 262.627C687.757 263.065 682.079 269.454 682.516 276.897L688.858 384.71L581.045 391.052C573.602 391.49 567.923 397.879 568.361 405.322C568.799 412.765 575.187 418.444 582.63 418.006L703.921 410.871ZM206.702 180.39C239.898 231.14 343.567 329.577 496.595 322.758L495.394 295.785C354.802 302.049 259.09 211.158 229.298 165.61L206.702 180.39ZM496.595 322.758C567.523 319.598 610.272 335.61 637.959 353.957C651.944 363.225 662.493 373.355 671.17 382.695C675.584 387.447 679.351 391.81 683.115 396.047C686.719 400.103 690.432 404.172 694.159 407.484L712.097 387.304C709.691 385.166 706.92 382.189 703.298 378.113C699.837 374.217 695.636 369.362 690.951 364.319C681.43 354.07 669.255 342.306 652.874 331.451C619.829 309.553 571.276 292.404 495.394 295.785L496.595 322.758Z"
                  fill="currentColor"
                  className="fill-cyan-500"
                />
              </svg>
            </div>

            <div
              className="hidden absolute top-2/4 end-0 transform -translate-y-2/4 translate-x-40 md:block lg:translate-x-80"
              aria-hidden="true"
            >
              <svg
                className="w-72 h-auto"
                width="1115"
                height="636"
                viewBox="0 0 1115 636"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z"
                  fill="currentColor"
                  className="fill-orange-500"
                />
                <path
                  d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z"
                  fill="currentColor"
                  className="fill-cyan-500"
                />
                <path
                  d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z"
                  fill="currentColor"
                  className="fill-gray-800"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* faq  */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="max-w-xs">
              <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
                Pertanyaan yang sering di ajukan
              </h2>
              <p className="mt-1 hidden md:block text-gray-600">
                Kami telah merangkum beberapa pertanyaan yang sering di ajukan
                oleh calon pelanggan kami.
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="hs-accordion-group divide-y divide-gray-200">
              <div
                className="hs-accordion pb-3 active"
                id="hs-basic-with-title-and-arrow-stretched-heading-one"
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                >
                  Bisa dijual di mana ?
                  <svg
                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <FaqList
                    list={[
                      "Bisa Anda jual secara online ataupun offline.",
                      "Bisa dijual secara bundle ataupun eceran.",
                      "Bisa dijual di Shopee, grup WA, grup FB, atau di WA story.",
                      "Bisa Anda cetak mandiri dan dijual kembali. Misal : jual di playground, penitipan anak, fotocopyan, dll.",
                    ]}
                  />
                </div>
              </div>

              <div
                className="hs-accordion pt-6 pb-3"
                id="hs-basic-with-title-and-arrow-stretched-heading-two"
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                >
                  Apa Saja Isinya ?{" "}
                  <svg
                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                >
                  <FaqList
                    list={[
                      "Aktivitas Seru: Ada puzzle, labirin, halaman mewarnai, tracing, belajar angka, huruf dan banyak lagi yang bikin si kecil asyik bermain dan belajar.",
                      "Worksheets Pendidikan: Matematika, bahasa inggris, sains, semua dirancang dengan cara yang menyenangkan dan bikin penasaran.",
                      "Planner Anak: Biar si kecil belajar tanggung jawab dan mengatur waktu sejak dini.",
                      "Jurnal Kreatif: Picu imajinasi dan ekspresi diri si kecil dengan jurnal yang penuh inspirasi.",
                      "Template Lucu-Lucu: Dari tema liburan sampai karakter favorit, bikin eksplorasi belajar jadi lebih seru!",
                      "Hak Jual Ulang : Anda dapat menjual kembali printable worksheet ini dan mendapatkan penghasilan tambahan!",
                    ]}
                  />
                </div>
              </div>

              <div
                className="hs-accordion pt-6 pb-3"
                id="hs-basic-with-title-and-arrow-stretched-heading-three"
              >
                <button
                  className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                >
                  Cocok Untuk Siapa?
                  <svg
                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                >
                  <FaqList
                    list={[
                      "Orangtua dengan Anak Usia 2-5 Tahun. Anda yang membutuhkan solusi untuk kegiatan edukatif dan menghibur bagi si kecil.",
                      "Guru TK dan PAUD. Anda dapat menggunakan printable worksheet ini untuk melengkapi materi pembelajaran di kelas.",
                      "Pengasuh anak. Anda dapat menggunakan printable worksheet ini untuk mengisi waktu luang anak-anak yang Anda asuh.",
                      "Pemilik bisnis online. Anda dapat menjual printable worksheet ini sebagai produk digital di toko online Anda.",
                      "Siapapun yang ingin mendapatkan penghasilan tambahan dapat menjual printable worksheet ini. Dapat dijual dengan berbagai cara, seperti online, offline, atau melalui reseller.",
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* testimonials */}
      <h4>
        <span className="block text-2xl font-bold text-center text-gray-800 md:text-4xl">
          Testimonials
        </span>
        <span className="block mt-1 text-center text-gray-600">
          Pelanggan kami sangat puas dengan produk kami.
        </span>
      </h4>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col bg-green-500 border border-gray-200 shadow-sm rounded-xl">
            <div className="flex-auto p-4 md:p-6">
              <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl">
                <em>
                  {`" Alhamdulillah puas banget sama worksheetnya. Mulai dari basic banget kayak tracing garis, melengkung, dll. Banyak gambar² yg anak suka jadi bocilku jadi semangat belajar. Selain itu juga ada game nya. Good bgt😇 🤗

Oiya saya print yang butuh² dulu dan jadiin 2 dalam selembar biar irit wkwkwk "`}
                </em>
              </p>
            </div>

            <div className="p-4 rounded-b-xl md:px-6">
              <h3 className="text-sm font-semibold text-gray-800 sm:text-base">
                Bunda Oktavia
              </h3>
              <p className="text-sm text-white">Ibu Rumah Tangga</p>
            </div>
          </div>

          <div className="flex flex-col bg-green-500 border border-gray-200 shadow-sm rounded-xl">
            <div className="flex-auto p-4 md:p-6">
              <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl">
                <em>
                  {`" Terima kasih.. Uda ga sabar pengen cepet di print. Passs banget buat kasih aktifitas anak2.. dari pada les di luar lebih resiko. Isi filenya banyak banget masih dapet bonus pula. Harga sangat terjangkau.. Apalagi bisa dijual kembali, sehingga bisa balik modal dan dapet uang tambahan. 👍🙏🥰 "`}
                </em>
              </p>
            </div>

            <div className="p-4 rounded-b-xl md:px-6">
              <h3 className="text-sm font-semibold text-gray-800 sm:text-base">
                Bunda Juita Anissa{" "}
              </h3>
              <p className="text-sm text-white">Owner Bisnis Playground</p>
            </div>
          </div>

          <div className="flex flex-col bg-green-500 border border-gray-200 shadow-sm rounded-xl">
            <div className="flex-auto p-4 md:p-6">
              <p className="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl">
                <em>
                  {`" Dapat materi yg banyak banget buat latihan anak. Materinya dalam bahasa Inggris. Jadi sekalian belajar bahasa inggris. Ada kegiatan yang bisa bikin bonding dengan anak. Jadi jangan ragu ya kalo mau beli. "`}
                </em>
              </p>
            </div>

            <div className="p-4 rounded-b-xl md:px-6">
              <h3 className="text-sm font-semibold text-gray-800 sm:text-base">
                Bunda Naomi Nova
              </h3>
              <p className="text-sm text-white">Influencer dan blogger</p>
            </div>
          </div>
        </div>
      </div>

      {/* hero 2 */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <Image
              className="rounded-xl"
              src="/teacreativelife-soo-chung-DqmjXvag51U-unsplash.jpg"
              alt="Teacreativelife soo chung"
              width={1000}
              height={800}
            />
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                  Tunggu apa lagi? ⏰{" "}
                </h2>
                <p className="text-gray-500">
                  Pesan Printable Worksheet Edukatif Anak Usia 2-5 Tahun Anda
                  sekarang dan raih keuntungan berlipat dari menjual worksheet
                  anak! 🥰
                </p>
              </div>
              {/* <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-3xl text-gray-800">
                  BERAPA HARGANYA?{" "}
                </h2>
                <p className="text-gray-500">
                  🤔 Kira-kira worth it gak, cuma 98 ribu tapi dapat puluhan
                  ribu halaman worksheet anak?
                </p>
                <p className="text-gray-500">
                  🤔 Worth it gak, 98 ribu aja, tapi Anda bisa jual kembali dan
                  bisa datangkan cuan berkali lipat?
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* hero 3 */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex justify-center">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-2 md:space-y-4">
            <h2 className="font-bold text-3xl lg:text-3xl text-red-600">
              BERAPA HARGANYA?{" "}
            </h2>
            <div className="">
              <Image
                className="rounded-xl relative -mt-12 -mb-12"
                src="/pricing.png"
                alt="Pricing"
                width={700}
                height={700}
              />
            </div>
            <p className="text-red-500 font-bold mt-0 p-0 text-xl">
              🤔 Kira-kira worth it gak, cuma 98 ribu tapi dapat puluhan ribu
              halaman worksheet anak?
            </p>
            <p className="text-red-500 font-bold mt-0 p-0 text-xl">
              🤔 Worth it gak, 98 ribu aja, tapi Anda bisa jual kembali dan bisa
              datangkan cuan berkali lipat?
            </p>
          </div>
        </div>
      </div>

      {/* keuntungan */}
      <h4>
        <span className="block text-2xl font-bold text-center text-gray-800 md:text-4xl">
          Keuntungan
        </span>
        <span className="block mt-1 text-center text-gray-600">
          Keuntungan Jika Anda Investasi Produk Ini
        </span>
      </h4>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
          <div className="size-full bg-white shadow-lg rounded-lg p-5">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100">
                <svg
                  className="flex-shrink-0 size-6 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M3 21H21M3 18H21M5.82333 3.00037C6.2383 3.36683 6.5 3.90285 6.5 4.5C6.5 5.60457 5.60457 6.5 4.5 6.5C3.90285 6.5 3.36683 6.2383 3.00037 5.82333M5.82333 3.00037C5.94144 3 6.06676 3 6.2 3H17.8C17.9332 3 18.0586 3 18.1767 3.00037M5.82333 3.00037C4.94852 3.00308 4.46895 3.02593 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3.02593 4.46895 3.00308 4.94852 3.00037 5.82333M3.00037 5.82333C3 5.94144 3 6.06676 3 6.2V11.8C3 11.9332 3 12.0586 3.00037 12.1767M3.00037 12.1767C3.36683 11.7617 3.90285 11.5 4.5 11.5C5.60457 11.5 6.5 12.3954 6.5 13.5C6.5 14.0971 6.2383 14.6332 5.82333 14.9996M3.00037 12.1767C3.00308 13.0515 3.02593 13.531 3.21799 13.908C3.40973 14.2843 3.71569 14.5903 4.09202 14.782C4.46895 14.9741 4.94852 14.9969 5.82333 14.9996M5.82333 14.9996C5.94144 15 6.06676 15 6.2 15H17.8C17.9332 15 18.0586 15 18.1767 14.9996M21 12.1771C20.6335 11.7619 20.0973 11.5 19.5 11.5C18.3954 11.5 17.5 12.3954 17.5 13.5C17.5 14.0971 17.7617 14.6332 18.1767 14.9996M21 12.1771C21.0004 12.0589 21 11.9334 21 11.8V6.2C21 6.06676 21 5.94144 20.9996 5.82333M21 12.1771C20.9973 13.0516 20.974 13.5311 20.782 13.908C20.5903 14.2843 20.2843 14.5903 19.908 14.782C19.5311 14.9741 19.0515 14.9969 18.1767 14.9996M20.9996 5.82333C20.6332 6.2383 20.0971 6.5 19.5 6.5C18.3954 6.5 17.5 5.60457 17.5 4.5C17.5 3.90285 17.7617 3.36683 18.1767 3.00037M20.9996 5.82333C20.9969 4.94852 20.9741 4.46895 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.5311 3.02593 19.0515 3.00308 18.1767 3.00037M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                    // stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="w-full">
                <h3 className="block text-lg font-semibold text-gray-800 text-wrap">
                  Dapat Anda jual kembali 💰{" "}
                </h3>
              </div>
            </div>
            <p className="text-gray-600">
              Dapatkan penghasilan tambahan dengan menjual kembali produk ini.
            </p>
          </div>

          <div className="size-full bg-white shadow-lg rounded-lg p-5">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100">
                <svg
                  fill="#eab308"
                  height="24"
                  width="24"
                  viewBox="0 0 511.999 511.999"
                >
                  <g>
                    <g>
                      <path
                        d="M428.517,54.219H301.838V23.921h86.66C361.822,8.872,331.096,0.203,298.393,0c-21.28,0.316-38.496,17.715-38.496,39.07
			c0,21.551,17.532,39.084,39.084,39.084h22.43h127.466C442.765,69.611,435.95,61.604,428.517,54.219z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M482.095,162.684h-60.779v-15.149v-15.149h54.296c-2.496-8.233-5.545-16.225-9.109-23.935H378.7
			c7.623,11.138,12.093,24.598,12.093,39.084c0,14.486-4.469,27.945-12.093,39.084h67.363l24.521,15.61l13.008,8.28v-24.151h0
			C483.591,178.34,483.082,170.438,482.095,162.684z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M229.6,39.069c0-14.278,4.339-27.561,11.761-38.604c-28.169,1.997-54.624,10.282-77.974,23.455h35.69v30.298h-75.708
			c-7.433,7.387-14.249,15.392-20.362,23.935h138.684C234.069,67.014,229.6,53.556,229.6,39.069z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M241.69,433.846H103.007c6.112,8.543,12.928,16.549,20.361,23.935h75.708v30.298h-35.69
			c23.35,13.173,49.806,21.459,77.974,23.455c-7.423-11.043-11.762-24.326-11.762-38.604
			C229.599,458.444,234.068,444.985,241.69,433.846z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M470.584,309.772l-24.521,15.61H378.7c7.624,11.138,12.093,24.597,12.093,39.083c0,14.486-4.47,27.945-12.093,39.084
			h87.803c3.563-7.711,6.613-15.703,9.109-23.935h-54.296v-15.149v-15.149h60.779c0.988-7.754,1.497-15.657,1.497-23.675v-24.15
			L470.584,309.772z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M321.411,325.381H93.292H68.293v0.26c0,8.019,0.509,15.92,1.497,23.674h248.764v15.149v15.149H76.273
			c2.495,8.233,5.545,16.225,9.108,23.935h213.6h22.43v0.001c21.551,0,39.084-17.533,39.084-39.084S342.962,325.381,321.411,325.381
			z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M428.516,457.781c7.434-7.387,14.25-15.392,20.362-23.935H321.411h-22.43c-21.551,0-39.084,17.533-39.084,39.084
			c0,21.354,17.216,38.753,38.496,39.069c32.702-0.203,63.429-8.871,90.104-23.92h-86.66v-30.298H428.516z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M321.411,108.45h-22.43H85.38c-3.563,7.711-6.613,15.703-9.108,23.935h242.282v15.149v15.149H69.79
			c-0.988,7.754-1.497,15.657-1.497,23.675v0.261h24.999h228.12c21.551,0,39.084-17.532,39.084-39.084
			S342.962,108.45,321.411,108.45z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <polygon
                        points="53.145,216.916 37.996,216.916 13.366,216.916 13.366,295.084 37.996,295.084 53.145,295.084 62.994,295.084 
			62.994,216.916 		"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <polygon points="468.341,236.716 456.799,229.369 456.799,282.631 468.341,275.284 498.633,256 		" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <polygon points="321.411,216.916 93.292,216.916 93.292,295.084 321.411,295.084 426.502,295.084 426.502,216.916 		" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="w-full">
                <h3 className="block text-lg font-semibold text-gray-800">
                  Bisa Untuk Belajar Anak.
                </h3>
              </div>
            </div>
            <p className="text-gray-600">
              Berikan kegiatan edukatif yang menyenangkan untuk anak Anda.
            </p>
          </div>

          <div className="size-full bg-white shadow-lg rounded-lg p-5">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100">
                <svg
                  className="flex-shrink-0 size-6 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5 6.00004C12.5 5.31322 12.2163 4.67366 11.7431 4.25578C11.2602 3.82926 10.5847 3.64296 9.87881 3.88387C9.12643 4.14065 8.27977 4.57906 7.61885 5.33233C7.12428 5.89599 6.74984 6.61798 6.58793 7.53045C5.74098 7.65664 5.00843 8.16524 4.47868 8.87157C3.86487 9.68999 3.5 10.7977 3.5 12C3.5 13.2023 3.86487 14.31 4.47868 15.1284C4.99276 15.8139 5.69782 16.3131 6.51308 16.4574C6.50452 16.494 6.5 16.5322 6.5 16.5715C6.5 17.7099 6.9821 18.5424 7.66175 19.1267C8.32466 19.6965 9.1633 20.0221 9.89841 20.212C11.366 20.5912 12.5 19.3418 12.5 18V6.00004ZM7.48691 16.4573C7.49547 16.494 7.5 16.5322 7.5 16.5715C7.5 17.3882 7.83089 17.9534 8.31361 18.3683C8.81308 18.7977 9.48618 19.0727 10.1486 19.2438C10.8199 19.4173 11.5 18.8674 11.5 18V6.00004C11.5 5.58229 11.3265 5.22198 11.0812 5.00533C10.8456 4.79731 10.5413 4.71442 10.2018 4.83027C9.55295 5.05172 8.87946 5.41182 8.37053 5.99186C7.87016 6.56214 7.5 7.37709 7.5 8.57147C7.5 8.84761 7.27614 9.07147 7 9.07147C6.72388 9.07147 6.50003 8.84764 6.5 8.57152C6.04804 8.70228 5.62513 9.00964 5.27868 9.47157C4.80671 10.1009 4.5 10.9932 4.5 12C4.5 13.0068 4.80671 13.8991 5.27868 14.5284C5.75054 15.1576 6.36424 15.5 7 15.5C7.59053 15.5 8.15996 15.2055 8.61676 14.6603C8.79412 14.4487 9.10948 14.4209 9.32114 14.5982C9.53279 14.7756 9.5606 15.091 9.38324 15.3026C8.88463 15.8976 8.23125 16.3255 7.48691 16.4573Z"
                    fill="#47495F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.55 11.5H14.5C14.2239 11.5 14 11.7239 14 12C14 12.2761 14.2239 12.5 14.5 12.5H16.55C16.7816 13.6411 17.7905 14.5 19 14.5C20.3807 14.5 21.5 13.3807 21.5 12C21.5 10.6193 20.3807 9.5 19 9.5C17.7905 9.5 16.7816 10.3589 16.55 11.5ZM17.5 11.9963C17.502 11.1695 18.1728 10.5 19 10.5C19.8284 10.5 20.5 11.1716 20.5 12C20.5 12.8284 19.8284 13.5 19 13.5C18.1728 13.5 17.502 12.8305 17.5 12.0037L17.5 12L17.5 11.9963Z"
                    fill="#47495F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.3385 16.132C17.7802 15.7388 18.3622 15.5 19 15.5C20.3807 15.5 21.5 16.6193 21.5 18C21.5 19.3807 20.3807 20.5 19 20.5C17.6193 20.5 16.5 19.3807 16.5 18C16.5 17.6162 16.5865 17.2527 16.741 16.9277C16.7227 16.9166 16.7049 16.9042 16.6877 16.8904L14.1877 14.8904C13.972 14.7179 13.9371 14.4033 14.1096 14.1877C14.2821 13.972 14.5967 13.9371 14.8124 14.1096L17.3124 16.1096C17.3214 16.1168 17.3301 16.1243 17.3385 16.132ZM19 16.5C18.1716 16.5 17.5 17.1716 17.5 18C17.5 18.8284 18.1716 19.5 19 19.5C19.8284 19.5 20.5 18.8284 20.5 18C20.5 17.1716 19.8284 16.5 19 16.5Z"
                    fill="#47495F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 3.5C17.6193 3.5 16.5 4.61929 16.5 6C16.5 6.38376 16.5865 6.74733 16.741 7.07228C16.7227 7.08341 16.7049 7.09584 16.6877 7.10958L14.1877 9.10958C13.972 9.28209 13.9371 9.59674 14.1096 9.81237C14.2821 10.028 14.5967 10.063 14.8124 9.89045L17.3124 7.89045C17.3214 7.88323 17.3301 7.87575 17.3385 7.86804C17.7802 8.26116 18.3622 8.5 19 8.5C20.3807 8.5 21.5 7.38071 21.5 6C21.5 4.61929 20.3807 3.5 19 3.5ZM17.5 6C17.5 5.17157 18.1716 4.5 19 4.5C19.8284 4.5 20.5 5.17157 20.5 6C20.5 6.82843 19.8284 7.5 19 7.5C18.1716 7.5 17.5 6.82843 17.5 6Z"
                    fill="#47495F"
                  />
                </svg>
              </div>
              <div className="w-full">
                <h3 className="block text-lg font-semibold text-gray-800 text-wrap">
                  Bisa Mengalihkan Focus Anak Dari HP/Gadget.
                </h3>
              </div>
            </div>
            <p className="text-gray-600">
              Bantu anak Anda untuk lebih kreatif dan aktif dengan worksheet
              ini.
            </p>
          </div>

          <div className="size-full bg-white shadow-lg rounded-lg p-5">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100">
                <svg
                  className="flex-shrink-0 size-6 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
                  <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
                  <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
                  <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
                </svg>
              </div>
              <div className="w-full">
                <h3 className="block text-lg font-semibold text-gray-800 text-wrap">
                  Target market evergreen (tidak terbatas waktu) 👶
                </h3>
              </div>
            </div>
            <p className="text-gray-600">
              Target market Anda tidak terbatas waktu, karena setiap tahun
              selalu ada anak usia 2-5 tahun.
            </p>
          </div>

          <div className="size-full bg-white shadow-lg rounded-lg p-5">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100">
                <svg
                  className="flex-shrink-0 size-6 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" />
                  <path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
                  <path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />
                </svg>
              </div>
              <div className="w-full text-wrap">
                <h3 className="block text-lg font-semibold text-gray-800">
                  Investasi sekali, jual berkali-kali. Potensi penghasilan
                  UNLIMITED. 🤑
                </h3>
              </div>
            </div>
            <p className="text-gray-600">
              Investasi sekali, jual berkali-kali. Potensi penghasilan
              UNLIMITED.
            </p>
          </div>

          <div className="size-full bg-white shadow-lg rounded-lg p-5">
            <div className="flex items-center gap-x-4 mb-3">
              <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100">
                <svg
                  className="flex-shrink-0 size-6 text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <circle cx="17.5" cy="17.5" r="3.5" />
                </svg>
              </div>
              <div className="w-full">
                <h3 className="block text-lg font-semibold text-gray-800">
                  Tersedia bonus menarik ⭐️
                </h3>
              </div>
            </div>
            <p className="text-gray-600">
              Dapatkan bonus menarik dalam bundling ini.
            </p>
          </div>
        </div>
      </div>

      {/* gallery */}
      <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-12 gap-6">
          <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
            <a
              className="group relative block rounded-xl overflow-hidden"
              onClick={() => {
                openZoomedImage("/1.jpeg");
              }}
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <Image
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="/1.jpeg"
                  alt="contoh produk 1"
                  width={800}
                  height={500}
                />
              </div>
              {/* <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                  Workplace personalities
                </div>
              </div> */}
            </a>
          </div>

          <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
            <a
              className="group relative block rounded-xl overflow-hidden"
              // href="#"
              onClick={() => {
                openZoomedImage("/3.jpeg");
              }}
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <Image
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="/3.jpeg"
                  alt="contoh produk 3"
                  width={500}
                  height={800}
                />
              </div>
              {/* <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
                <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl">
                  Women in engineering
                </div>
              </div> */}
            </a>
          </div>

          <div className="col-span-12 md:col-span-4">
            <a
              className="group relative block rounded-xl overflow-hidden"
              // href="#"
              onClick={() => {
                openZoomedImage("/2.jpeg");
              }}
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <Image
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="/2.jpeg"
                  alt="contoh produk 2"
                  width={800}
                  height={400}
                />
              </div>
            </a>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <a
              className="group relative block rounded-xl overflow-hidden"
              // href="#"
              onClick={() => {
                openZoomedImage("/4.jpeg");
              }}
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <Image
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="/4.jpeg"
                  alt="contoh produk 4"
                  width={800}
                  height={400}
                />
              </div>
            </a>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <a
              className="group relative block rounded-xl overflow-hidden"
              // href="#"
              onClick={() => {
                openZoomedImage("/5.jpeg");
              }}
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <Image
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src="/5.jpeg"
                  alt="contoh produk 5"
                  width={800}
                  height={400}
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* hero 4 */}
      <div className="overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
            <div className="text-center">
              <p className="text-md font-semibold text-gray-500 tracking-wide uppercase mb-3">
                Kalau Anda tidak paham seberapa menguntungkan penawaran ini,
                mending gak usah. Biarkan orang lain yang mengambil peluang ini
                agar gak banyak saingan 😁😁
              </p>
              <h1 className="text-2xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight">
                ⚠️<span className="text-red-500">PERHATIAN!</span> ⚠️ <br />
                TIDAK ADA BARANG FISIK YANG AKAN KAMI KIRIM KE ALAMAT ANDA{" "}
              </h1>
            </div>

            <div className="mx-auto">
              <Image
                alt="arrow-down"
                src={"/arrow-down-2.gif"}
                width={300}
                height={300}
              />
              <a
                className=""
                href="https://wa.me/6285262625889?text=Assalamu'alaikum Bunda Ani. Saya mau _Jenius Printable Bundling 2024_ harga *Rp.98.000*"
                target="_blank"
                rel="noopener"
              >
                <Image
                  alt="pesan sekarang"
                  src={"/gambar-gif-pesan-sekarang.gif"}
                  width={300}
                  height={100}
                />
              </a>
            </div>

            <div
              className="hidden absolute top-2/4 start-0 transform -translate-y-2/4 -translate-x-40 md:block lg:-translate-x-80"
              aria-hidden="true"
            >
              <svg
                className="w-52 h-auto"
                width="717"
                height="653"
                viewBox="0 0 717 653"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M170.176 228.357C177.176 230.924 184.932 227.329 187.498 220.329C190.064 213.329 186.47 205.574 179.47 203.007L170.176 228.357ZM98.6819 71.4156L85.9724 66.8638L85.8472 67.2136L85.7413 67.5698L98.6819 71.4156ZM336.169 77.9736L328.106 88.801L328.288 88.9365L328.475 89.0659L336.169 77.9736ZM616.192 128.685C620.658 122.715 619.439 114.254 613.469 109.788L516.183 37.0035C510.213 32.5371 501.753 33.756 497.286 39.726C492.82 45.696 494.039 54.1563 500.009 58.6227L586.485 123.32L521.788 209.797C517.322 215.767 518.541 224.227 524.511 228.694C530.481 233.16 538.941 231.941 543.407 225.971L616.192 128.685ZM174.823 215.682C179.47 203.007 179.475 203.009 179.48 203.011C179.482 203.012 179.486 203.013 179.489 203.014C179.493 203.016 179.496 203.017 179.498 203.018C179.501 203.019 179.498 203.018 179.488 203.014C179.469 203.007 179.425 202.99 179.357 202.964C179.222 202.912 178.991 202.822 178.673 202.694C178.035 202.437 177.047 202.026 175.768 201.456C173.206 200.314 169.498 198.543 165.106 196.099C156.27 191.182 144.942 183.693 134.609 173.352C114.397 153.124 97.7311 122.004 111.623 75.2614L85.7413 67.5698C68.4512 125.748 89.856 166.762 115.51 192.436C128.11 205.047 141.663 213.953 151.976 219.692C157.158 222.575 161.591 224.698 164.777 226.118C166.371 226.828 167.659 227.365 168.578 227.736C169.038 227.921 169.406 228.065 169.675 228.168C169.809 228.22 169.919 228.261 170.002 228.293C170.044 228.309 170.08 228.322 170.109 228.333C170.123 228.338 170.136 228.343 170.147 228.347C170.153 228.349 170.16 228.352 170.163 228.353C170.17 228.355 170.176 228.357 174.823 215.682ZM111.391 75.9674C118.596 55.8511 137.372 33.9214 170.517 28.6833C204.135 23.3705 255.531 34.7533 328.106 88.801L344.233 67.1462C268.876 11.0269 210.14 -4.91361 166.303 2.01428C121.993 9.01681 95.9904 38.8917 85.9724 66.8638L111.391 75.9674ZM328.475 89.0659C398.364 137.549 474.018 153.163 607.307 133.96L603.457 107.236C474.34 125.837 406.316 110.204 343.864 66.8813L328.475 89.0659Z"
                  fill="currentColor"
                  className="fill-gray-800"
                />
                <path
                  d="M17.863 238.22C10.4785 237.191 3.6581 242.344 2.62917 249.728C1.60024 257.113 6.75246 263.933 14.137 264.962L17.863 238.22ZM117.548 265.74L119.421 252.371L119.411 252.37L117.548 265.74ZM120.011 466.653L132.605 471.516L132.747 471.147L132.868 470.771L120.011 466.653ZM285.991 553.767C291.813 549.109 292.756 540.613 288.098 534.792L212.193 439.92C207.536 434.098 199.04 433.154 193.218 437.812C187.396 442.47 186.453 450.965 191.111 456.787L258.582 541.118L174.251 608.589C168.429 613.247 167.486 621.742 172.143 627.564C176.801 633.386 185.297 634.329 191.119 629.672L285.991 553.767ZM14.137 264.962L115.685 279.111L119.411 252.37L17.863 238.22L14.137 264.962ZM115.675 279.11C124.838 280.393 137.255 284.582 145.467 291.97C149.386 295.495 152.093 299.505 153.39 304.121C154.673 308.691 154.864 314.873 152.117 323.271L177.779 331.665C181.924 318.993 182.328 307.301 179.383 296.818C176.451 286.381 170.485 278.159 163.524 271.897C149.977 259.71 131.801 254.105 119.421 252.371L115.675 279.11ZM152.117 323.271C138.318 365.454 116.39 433.697 107.154 462.535L132.868 470.771C142.103 441.936 164.009 373.762 177.779 331.665L152.117 323.271ZM107.417 461.79C103.048 473.105 100.107 491.199 107.229 508.197C114.878 526.454 132.585 539.935 162.404 543.488L165.599 516.678C143.043 513.99 135.175 505.027 132.132 497.764C128.562 489.244 129.814 478.743 132.605 471.516L107.417 461.79ZM162.404 543.488C214.816 549.734 260.003 554.859 276.067 556.643L279.047 529.808C263.054 528.032 217.939 522.915 165.599 516.678L162.404 543.488Z"
                  fill="currentColor"
                  className="fill-orange-500"
                />
                <path
                  d="M229.298 165.61C225.217 159.371 216.85 157.621 210.61 161.702C204.371 165.783 202.621 174.15 206.702 180.39L229.298 165.61ZM703.921 410.871C711.364 410.433 717.042 404.045 716.605 396.602L709.47 275.311C709.032 267.868 702.643 262.189 695.2 262.627C687.757 263.065 682.079 269.454 682.516 276.897L688.858 384.71L581.045 391.052C573.602 391.49 567.923 397.879 568.361 405.322C568.799 412.765 575.187 418.444 582.63 418.006L703.921 410.871ZM206.702 180.39C239.898 231.14 343.567 329.577 496.595 322.758L495.394 295.785C354.802 302.049 259.09 211.158 229.298 165.61L206.702 180.39ZM496.595 322.758C567.523 319.598 610.272 335.61 637.959 353.957C651.944 363.225 662.493 373.355 671.17 382.695C675.584 387.447 679.351 391.81 683.115 396.047C686.719 400.103 690.432 404.172 694.159 407.484L712.097 387.304C709.691 385.166 706.92 382.189 703.298 378.113C699.837 374.217 695.636 369.362 690.951 364.319C681.43 354.07 669.255 342.306 652.874 331.451C619.829 309.553 571.276 292.404 495.394 295.785L496.595 322.758Z"
                  fill="currentColor"
                  className="fill-cyan-500"
                />
              </svg>
            </div>

            <div
              className="hidden absolute top-2/4 end-0 transform -translate-y-2/4 translate-x-40 md:block lg:translate-x-80"
              aria-hidden="true"
            >
              <svg
                className="w-72 h-auto"
                width="1115"
                height="636"
                viewBox="0 0 1115 636"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z"
                  fill="currentColor"
                  className="fill-orange-500"
                />
                <path
                  d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z"
                  fill="currentColor"
                  className="fill-cyan-500"
                />
                <path
                  d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z"
                  fill="currentColor"
                  className="fill-gray-800"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
          <div className="text-center">
            <p className="text-md font-semibold text-gray-500 tracking-wide uppercase mb-3">
              Ini merupakan produk digital (file PDF) yang bisa dibuka di iPad/
              Tablet/ smartphone Anda. Anda juga bisa mencetak produk digital
              ini secara mandiri sesuai kebutuhan.
            </p>
          </div>
          <div className="text-center">
            <p className="text-md font-semibold text-gray-500 tracking-wide uppercase mb-3">
              Produk ini tidak bisa di refund, karena sifatnya yang digital.
              Jadi pastikan Anda memahami produk yang akan Anda beli.
            </p>
          </div>
        </div>
      </div>

      {zoomedImage && (
        <div className="zoomed-image-container" onClick={closeZoomedImage}>
          <Image
            src={zoomedImage}
            alt="zoomed-image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}

      {/* footer */}
      <footer className="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto border-t-2 border-solid border-gray-100">
        <div className="text-center">
          <div>
            <a
              className="flex-none text-xl font-semibold text-black"
              href="#"
              aria-label="Brand"
            >
              JENIUS PRINTABLE
            </a>
          </div>

          <div className="mt-3">
            {/* <p className="text-gray-500">
              We're part of the{" "}
              <a
                className="font-semibold text-yellow-500 hover:text-blue-700"
                href="#"
              >
                Htmlstream
              </a>{" "}
              family.
            </p> */}
            <p className="text-gray-500">
              © Aitilokal. {new Date().getFullYear().toString()} Aniprintable.
              All rights reserved.
            </p>
          </div>

          {/* <div className="mt-3 space-x-2">
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              <svg
                className="flex-shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </a>
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              <svg
                className="flex-shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              <svg
                className="flex-shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
            <a
              className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              <svg
                className="flex-shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
              </svg>
            </a>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
