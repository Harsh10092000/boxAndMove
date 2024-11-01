
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdowntohtml";
import React from "react";
import Header from "src/app/components/Header";
import Footer from "src/app/components/Footer";
//import "./markdownstyling.css";
import "./markdownstyling.css";
//import { IconChevronDown } from "@tabler/icons-react";

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = post.title;

  return {
    title,
    description: post.description,
    openGraph: {
      title: post.ogtitle,
    },
  };
}

const Page = async ({ params }) => {
  const post = getPostBySlug(params.slug);

  const content = await markdownToHtml(post.content || "");
  const faq = post.faq;
  return (
    <>
      <Header />
      <div class="max-w-screen-lg mx-auto">
        <main class="mt-10">
          <div class="mb-4 md:mb-0 w-full mx-auto relative">
            <div class="px-4 lg:px-0">
              <h2 class="text-4xl font-semibold text-gray-800 leading-tight">
                {post.title}
              </h2>
              <a
                href="#"
                class="py-2 text-green-700 inline-flex items-center justify-center mb-2"
              >
                {post.category}
              </a>
            </div>

            {/* <img
              src={post.coverImage}
              class="md:w-[70%] max-h-[400px] object-cover lg:rounded w-full"
            /> */}
          </div>

          <div class="flex flex-col lg:flex-row lg:space-x-12">
            <div class="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
              <div
                className="markdown py-4"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
            <div class="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
              <div class="p-4 border-t border-b md:border md:rounded">
                <div class="flex py-2">
                  <img
                    src={post.coverImage}
                    class="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p class="font-semibold text-gray-700 text-sm">
                      {" "}
                      {post.author}{" "}
                    </p>
                    <p class="font-semibold text-gray-600 text-xs"> Editor </p>
                  </div>
                </div>
                <p class="text-gray-700 py-3">{post.description}</p>
              </div>
            </div>
          </div>
        </main>
        <div className="py-10 px-5 ">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQs</h2>
            <p className="text-neutral-500 text-xl mt-3">
              Frequenty Asked Questions
            </p>
          </div>
          <div className="grid divide-y divide-neutral-200 max-w-4xl mx-auto mt-8">
            {faq?.map((item, index) => (
              <div className="py-5 w-full" key={index}>
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl">
                    <span>{item.question}</span>
                    <span className="transition group-open:rotate-180">
                      {/* <IconChevronDown /> */}
                      icon
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    {item.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
