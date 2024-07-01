import { useEffect } from "react";
import kafka from "../../public/ricing.png";
import cheatSheet from "../../public/cheat-sheet.png";
import ibm from "../../public/ibm.png";
import payroll from "../../public/payroll.png";
import thisweb from "../../public/thisweb.png";
import {
  FaLaptopCode,
  FaMouse,
  FaKeyboard,
  FaRegWindowMaximize,
} from "react-icons/fa";
import { IoTerminalSharp, IoColorPalette } from "react-icons/io5";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="home-page-container mx-auto my-16">
        <Section header="Hello, fellas" color="#cba6f7">
          <p
            className="indent-8 text-justify tracking-wide hyphens-auto"
            lang="en"
          >
            My name is Puriwat Nitijarasrat. I'm recently graduated from
            industrial engineering, Chulalongkorn University. I enjoy coding so
            far and hope it becomes my career one day.
          </p>
        </Section>
        <Section header="Bio" color="#f38ba8">
          <ul className="">
            <GridList header="2001" event="Born in Bangkok, Thailand" />
            <GridList
              header="2020"
              event="Enrolled Industrial Engineering @ Chulalongkorn University"
            />
            <GridList
              header="2023"
              event="Interned as Frontend Developer @ Donuts Bangkok"
            />
            <GridList
              header="2024"
              event="Graduated from Industrial Engineering @ Chulalongkorn University"
            />
          </ul>
        </Section>
        <Section header="I can do THESE" color="#eba0ac">
          <ul className="">
            <GridList
              header="Design"
              event="Figma, Customer Journey Map, Service Blueprint"
            />
            <GridList
              header="Front"
              event="HTML, CSS, JavaScript, TypeScript, React"
            />
            <GridList header="Back" event="NodeJS, GO, SQL, Firebase" />
          </ul>
        </Section>
        <Section header="I built THESE" color="#fab387">
          <ul className="">
            <LoveList
              header="Website for Industrial Business Management Class"
              img={ibm}
              desc="A website, used by over 90 students, for announcing class news and recruiting side projects."
              tag={
                <TagList>
                  <Tag title="javascript" />
                  <Tag title="react" />
                  <Tag title="firebase" />
                </TagList>
              }
            />
            <LoveList
              header="Payroll Service Prototype"
              img={payroll}
              desc="My senior project fullstack Payroll Service app for usability testing purpose."
              tag={
                <TagList>
                  <Tag title="javascript" />
                  <Tag title="react" />
                  <Tag title="node" />
                </TagList>
              }
            />
            <LoveList
              header="This Website"
              img={thisweb}
              desc="My portfolio website"
              tag={
                <TagList>
                  <Tag title="typescript" />
                  <Tag title="tailwind" />
                  <Tag title="framer-motion" />
                </TagList>
              }
            />
            <LoveList
              header="MacOS Catppuccin Ricing"
              img={kafka}
              desc="I custom my macOS using Catppuccin and Kafka from Honkai Starail. dotfile is coming soon."
            />
            <LoveList
              header="Terminal Cheat Sheet"
              img={cheatSheet}
              desc="Bash script to print the cheat sheet, improving development workflow."
              tag={
                <TagList>
                  <Tag title="bash" />
                </TagList>
              }
            />
          </ul>
        </Section>
        <Section header="My Setup" color="#f9e2af">
          <p className="my-2">These are the tools I've been using lately.</p>
          <ul className="grid sm:grid-cols-2 gap-y-2">
            <SetUpList icon={<FaLaptopCode />} title="Mac M1 Air" />
            <SetUpList
              icon={<FaKeyboard />}
              title="Akko with Gateron Melodic"
            />
            <SetUpList icon={<FaMouse />} title="Logitech MX3" />
            <SetUpList icon={<IoTerminalSharp />} title="Iterm2" />
            <SetUpList icon={<FaRegWindowMaximize />} title="NeoVim" />
            <SetUpList icon={<IoColorPalette />} title="Catppuccin" />
          </ul>
        </Section>
        <Section header="Contact" color="#a6e3a1">
          <ul>
            <li>email: puriwatds@gmail.com</li>
          </ul>
        </Section>
        <div className="flex flex-row gap-8 my-16 justify-center">
          <FooterCircle color="#cba6f7" />
          <FooterCircle color="#f38ba8" />
          <FooterCircle color="#fab387" />
          <FooterCircle color="#f9e2af" />
          <FooterCircle color="#a6e3a1" />
          <FooterCircle color="#74c7ec" />
          <FooterCircle color="#89b4fa" />
        </div>
      </div>
      <div className="text-center my-4 text-zinc-500">
        © 2024 Puriwat Nirijarasrat. All Rights Reserved.{" "}
      </div>
    </>
  );
}

interface SectionProp {
  header: string;
  color: string;
  children: React.ReactNode;
}

function Section({ header, color, children }: SectionProp) {
  return (
    <section className="my-4">
      <span
        className="text-3xl underline decoration-8 underline-offset-4 font-bold"
        style={{ textDecorationColor: color }}
      >
        {header}
      </span>
      <div className="mt-4 tracking-wide">{children}</div>
    </section>
  );
}

interface GridListProp {
  header: string;
  event: string;
}

function GridList({ header, event }: GridListProp) {
  return (
    <li className="grid grid-cols-4 gap-4 mb-2">
      <span className="font-semibold text-zinc-700">{header}</span>
      <span className="col-span-3">{event}</span>
    </li>
  );
}

interface LoveListProp {
  header: string;
  img?: string;
  desc: string;
  tag?: React.ReactNode;
}

function LoveList({ header, img, desc, tag }: LoveListProp) {
  return (
    <div className="mb-4">
      <div className="font-semibold text-xl mb-2">{header}</div>
      {img ? <img src={img} className="rounded-lg" /> : null}
      <div className="mt-2">
        <p>{desc}</p>
        {tag}
      </div>
      <hr className="w-48 h-1 mx-auto my-8 bg-gray-300 border-0 rounded" />
    </div>
  );
}

interface TagProp {
  title: string;
}

function Tag({ title }: TagProp) {
  let color = "#cdd6f4";
  if (title === "javascript") {
    color = "#f9e2af";
  }
  if (title === "react") {
    color = "#89dceb";
  }
  if (title === "node") {
    color = "#a6e3a1";
  }
  if (title === "firebase") {
    color = "#f38ba8";
  }
  if (title === "bash") {
    color = "#7f849c";
  }
  if (title === "typescript") {
    color = "#89b4fa";
  }
  if (title === "tailwind") {
    color = "#74c7ec";
  }
  if (title === "framer-motion") {
    color = "#cba6f7";
  }
  return (
    <div className="px-2 py-1 font-semibold" style={{ backgroundColor: color }}>
      {title}
    </div>
  );
}

interface TagListProp {
  children: React.ReactNode;
}

function TagList({ children }: TagListProp) {
  return <div className="flex flex-row gap-4 flex-wrap mt-2">{children}</div>;
}

interface SetUpListProp {
  icon: React.ReactNode;
  title: string;
}

function SetUpList({ icon, title }: SetUpListProp) {
  return (
    <li className="grid grid-cols-8 text-l">
      <span className="text-xl flex justify-center items-center text-zinc-500">
        {icon}
      </span>
      <span className="col-span-6">{title}</span>
    </li>
  );
}

interface FooterCircleProp {
  color: string;
}

function FooterCircle({ color }: FooterCircleProp) {
  return (
    <div
      className="w-[30px] h-[30px] border rounded-[50%]"
      style={{ backgroundColor: color }}
    />
  );
}
