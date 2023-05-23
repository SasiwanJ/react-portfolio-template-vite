import { Popover } from "@headlessui/react";
import { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, handleResumeScroll, isBlog }) => {
  const [, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  const theme = 'light'

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1 className="font-medium p-2 laptop:p-0 link">{name}.</h1>

              <div className="flex items-center">
                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showBlog && (
                    <Button>Blog</Button>
                  )}
                  {showResume && (
                    <Button onClick={handleResumeScroll}>Experience</Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:hello@chetanverma.com")}
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button >Blog</Button>
                  )}
                  {showResume && (
                    <Button onClick={handleResumeScroll}>Experience</Button>
                  )}

                  <Button
                    onClick={() => window.open("mailto:hello@chetanverma.com")}
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky bg-white dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showBlog && (
              <Button >Blog</Button>
            )}
            {showResume && (
              <Button onClick={handleResumeScroll}>Experience</Button>
            )}

            <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
              Contact
            </Button>
          </div>
        ) : (
          <div className="flex">
            <Button >Home</Button>
            {showBlog && (
              <Button >Blog</Button>
            )}
            <Button onClick={handleResumeScroll}>Experience</Button>

            <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
              Contact
            </Button>

          </div>
        )}
      </div>
    </>
  );
};

export default Header;
