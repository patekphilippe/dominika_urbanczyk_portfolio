import {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentContext,
} from "next/document";
import {
  DocumentHeadTags,
  type DocumentHeadTagsProps,
  documentGetInitialProps,
} from "@mui/material-nextjs/v16-pagesRouter";

export default function Document(props: DocumentHeadTagsProps) {
  return (
    <Html lang="en">
      <Head>
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  return await documentGetInitialProps(ctx);
};
