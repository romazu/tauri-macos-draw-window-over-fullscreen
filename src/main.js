const {appWindow } = window.__TAURI__.window;

async function toggleWindowVisibility() {
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
