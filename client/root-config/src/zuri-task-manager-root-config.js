import { registerApplication, start } from "single-spa"

registerApplication({
  name: "@zuri/task-manager",
  app: () => System.import("@zuri/task-manager"),
  activeWhen: ["/"]
})

start({
  urlRerouteOnly: true
})
