import { QuartzConfig } from "./quartz/plugins"
import { ContentPage, CreatedModifiedDate, Description, FrontmatterTags, FullTextSearch, Links, CrawlLinks, SyntaxHighlighting, TableOfContents, TagPage, FolderPage, IndexPage, TagContentIndex, FolderContentIndex, Graph, RecentNotes, NotFound } from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "UP主观点汇总",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    baseUrl: "ppzzyy.github.io",
    ignorePatterns: ["private", "templates"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Scholar",
        body: "Noto Sans SC",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a98c",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebeb",
          secondary: "#7b97aa",
          tertiary: "#84a98c",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      new FrontmatterTags(),
      new CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      new Description(),
      new CrawlLinks(),
      new SyntaxHighlighting(),
      new TableOfContents(),
      new Links(),
    ],
    filters: [new ContentPage()],
    emitters: [
      new TagPage(),
      new FolderPage(),
      new IndexPage(),
      new TagContentIndex(),
      new FolderContentIndex(),
      new FullTextSearch(),
      new Graph(),
      new RecentNotes({ showTags: true }),
      new NotFound(),
    ],
  },
}

export default config
