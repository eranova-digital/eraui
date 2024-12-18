import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Button } from "./components/buttons/Button";
import { H1, H2, H3, H4, H5, H6 } from "./components/typography/Headings";
import { P, Fineprint } from "./components/typography/Paragraphs";

export default function App() {

  return (
    <main
      className="p-10"
    >
      <section id="typography">
        <div className="mb-14">
          <H1 accent="bg-primary-500" bold={true}>Typography</H1>
        </div>
        <div
          className="flex flex-row space-x-10"
        >
          <div
            className="flex flex-col space-y-6"
          >
            <H1>Heading 1 <sub>Subheading 1</sub></H1>
            <H2>Heading 2 <sub>Subheading 2</sub></H2>
            <H3>Heading 3 <sub>Subheading 3</sub></H3>
            <H4>Heading 4 <sub>Subheading 4</sub></H4>
            <H5>Heading 5 <sub>Subheading 5</sub></H5>
            <H6>Heading 6 <sub>Subheading 6</sub></H6>
          </div>
          <div>
            <P className="mb-10"><b>Paragraph</b>. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae voluptate cupiditate consectetur aliquid nostrum accusantium. Exercitationem veniam ullam praesentium asperiores ipsa cum molestiae ad! Ratione ex dolorum accusamus repellat voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae voluptate cupiditate consectetur aliquid nostrum accusantium. Exercitationem veniam ullam praesentium asperiores ipsa cum molestiae ad! Ratione ex dolorum accusamus repellat voluptatum.</P>
            <Fineprint><b>Fineprint</b>. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae voluptate cupiditate consectetur aliquid nostrum accusantium. Exercitationem veniam ullam praesentium asperiores ipsa cum molestiae ad! Ratione ex dolorum accusamus repellat voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae voluptate cupiditate consectetur aliquid nostrum accusantium. Exercitationem veniam ullam praesentium asperiores ipsa cum molestiae ad! Ratione ex dolorum accusamus repellat voluptatum.</Fineprint>
          </div>
        </div>
      </section>
      <section id="buttons"
        className="mt-20"
      >
        <div className="mb-14">
          <H1 accent="bg-primary-500" bold={true}>Buttons</H1>
        </div>
        <div>
          <Button icon={<PaperAirplaneIcon/>}>Click me</Button>
          <br/>
          <Button>Click me</Button>
        </div>
      </section>
    </main>
  )
}
