import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import fsPromises from "fs/promises";
import path from "path";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/all";
import Title from "@/components/Head";

export default function Events({ posts, names }) {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState({});
  const individualPosts = posts[index];
  const animate = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
    gsap.fromTo(
      animate.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1 }
    );
  }, []);

  return (
    <div className="h-fit w-screen bg-soothing_black">
      <Title route={"/events"} />
      <Header id="navbar" />
      {/* <progress max="100" value="0"></progress> */}

      <main>
        <div className="relative w-screen h-full">
          <Image
            alt="Banner"
            src={"/banner.png"}
            fill
            style={{
              objectFit: "contain",
            }}
          />
          <div className="h-[5rem] md:h-[20rem] text-white font-clash tracking-wide font-black flex flex-col items-center justify-center">
            <span className="text-[1rem] pt-12 md:pt-16 md:text-[4rem] z-10">
              YUKTHI '24
            </span>
            <span className="text-[2.5rem] tracking-wider z-10">EVENTS</span>
          </div>
        </div>
        <div className="text-[1rem] p-8 font-semibold font-chakra flex flex-wrap gap-4 md:gap-12 justify-center text-white">
          {names.map((name, i) => (
            <span
              key={i}
              className="rounded-full px-4 py-[.3rem] hover:bg-white/20 transition-all duration-500 ease-in-out"
              style={{ border: index === i ? "1.75px solid #CAFA19" : "none" }}
              onClick={() => setIndex(i)}
            >
              {name}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-8 p-6">
          {individualPosts.length > 0 ? (
            individualPosts.map((post) => {
              return (
                <div
                  ref={animate}
                  className="relative flex justify-center items-center w-[21rem] h-[20rem] hover:scale-105 rounded-md overflow-hidden hover:shadow-lg hover:shadow-main_primary/80 transition-all duration-500 ease-in-out"
                  key={post.id}
                >
                  {loading[post.id] !== false ? (
                    <div className="spinner" />
                  ) : null}
                  <Link href={`/events/${post.id}`}>
                    <Image
                      src={post.img}
                      width={loading[post.id] !== false ? 0 : 500}
                      height={loading[post.id] !== false ? 0 : 500}
                      onLoad={() =>
                        setLoading((prevState) => ({
                          ...prevState,
                          [post.id]: false,
                        }))
                      }
                      alt={post.title}
                      className="cursor-pointer object-fill transform transition-all duration-500 ease-in-out"
                    />
                  </Link>
                </div>
              );
            })
          ) : (
            <div className="text-white font-semibold font-chakra text-2xl py-8">
              Coming Soon...
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/events.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: {
      posts: objectData.posts,
      names: objectData.names,
    },
  };
}
