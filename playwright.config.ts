import { type PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  snapshotDir: "./__snapshots__",
  // FIXME: Don't hard code all otherwise the snapshot tests are useless.
  // We do it here, just as a quick way to show example screenshots without using the trace viewer/reporter.
  updateSnapshots: "all",
  projects: [
    { name: "chromium", ...devices["Desktop Chrome"] },
    { name: "firefox", ...devices["Desktop Firefox"] },
    { name: "webkit", ...devices["Desktop Safari"] },
  ]
};

export default config;
