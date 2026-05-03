import { QuartzLayout } from "./quartz/plugins"

const sharedPageComponents: QuartzLayout["sharedPageComponents"] = [
  { Component: () => import("./quartz/components/PageTitle") },
  { Component: () => import("./quartz/components/Search") },
  { Component: () => import("./quartz/components/Darkmode") },
  { Component: () => import("./quartz/components/Explorer") },
]

const sharedHeadComponents: QuartzLayout["sharedHeadComponents"] = []

const headerComponents: QuartzLayout["headerComponents"] = []

const footerComponents: QuartzLayout["footerComponents"] = [
  { Component: () => import("./quartz/components/TagList") },
  { Component: () => import("./quartz/components/RecentNotes") },
  { Component: () => import("./quartz/components/Graph") },
]

const layout: QuartzLayout = {
  sharedHeadComponents,
  sharedPageComponents,
  headerComponents,
  footerComponents,
}

export default layout
