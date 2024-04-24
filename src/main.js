const {getCurrent } = window.__TAURI__.webviewWindow;

async function toggleWindowVisibility() {
  const appWindow = getCurrent()
  const isVisible = await appWindow.isVisible();
  if (isVisible) {
    console.log("hide")
    await appWindow.hide();
  } else {
    console.log("show")
    await appWindow.show();
  }
}

setInterval(toggleWindowVisibility, 500); // 500 milliseconds
