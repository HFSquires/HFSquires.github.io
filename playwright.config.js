const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  timeout: 30 * 1000,
  expect: {
    timeout: 5 * 1000
  },
  use: {
    baseURL: "http://127.0.0.1:4000",
    screenshot: "only-on-failure",
    trace: "on-first-retry"
  },
  webServer: {
    command: "zsh -lc 'export PATH=\"/opt/homebrew/bin:/opt/homebrew/sbin:$HOME/.rbenv/bin:$HOME/.rbenv/shims:$PATH\"; eval \"$(/opt/homebrew/bin/rbenv init - zsh)\"; rbenv shell 3.2.2; bundle exec jekyll serve --host 127.0.0.1 --port 4000'",
    url: "http://127.0.0.1:4000",
    reuseExistingServer: true,
    timeout: 120 * 1000
  },
  projects: [
    {
      name: "chromium-responsive",
      use: { ...devices["Desktop Chrome"] }
    }
  ]
});
