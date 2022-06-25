import webpack from "webpack"

// https://webpack.js.org/api/node

const config = {
  stats: {
    errorDetails: true,
    children: true
  }
}

webpack(config, (err, stats) => {
  if (err) {
    console.error(err.stack || err)
    // if (err.details) {
    //   console.error(err.details)
    // }
    return
  }

  const info = stats?.toJson()

  if (stats?.hasErrors()) {
    console.error(info?.errors)
  }

  if (stats?.hasWarnings()) {
    console.warn(info?.warnings)
  }

  // Log result...
})
