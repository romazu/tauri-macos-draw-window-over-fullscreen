# Reproducer for "Tauri Window Not Drawing on Other Workspaces" bug on macOS

This repository serves as a minimal reproducer for the following `tauri` bug:

## Expected Behavior

- An `alwaysOnTop` window can be drawn over other fullscreen apps in other workspaces on macOS in both the `tauri dev` and `tauri build` modes.

## Actual Behavior

### Tauri v1 Version (Branch `tauri_v1`):
- In `tauri dev` mode:
    - The window can be drawn on another workspace. **This is the expected behavior.**
- In `tauri build` mode:
    - The window is always drawn on the original workspace and cannot be moved to another one.

### Tauri v2 Version (Branch `tauri_v2`):
- Both `tauri dev` and `tauri build` modes:
    - The window is always drawn on the original workspace and cannot be moved to another one.

## How to Reproduce 

For the following tests prepare a workspace with a fullscreen app.

### Branch `tauri_v1`
0. Update dependencies:
    ```sh
    yarn
    ```

1. Check `dev` mode:
    ```sh
    yarn tauri dev
    ```
    - You will see the window starts toggling between visible and invisible states.
    - If you change (Ctrl+Arrow) the workspace to another one with some app open in fullscreen mode, you'll see the window continues blinking. **That's the expected behavior**.

2. Check `build` mode:
    ```sh
    yarn tauri build
    open ./src-tauri/target/release/bundle/macos/tauri-macos-draw-window-over-fullscreen.app
    ```
    - The window starts blinking as in the `dev` mode above.
    - If you change the workspace, there will be no blinking window there. **That's the problem.**

### Branch `tauri_v2`
0. Update dependencies:
    ```sh
    yarn
    ```

1. Check `dev` mode:
    ```sh
    yarn tauri dev
    ```
    - The window blinks only on the original workspace. **That's the problem.**

2. Check `build` mode:
    ```sh
    yarn tauri build
    open ./src-tauri/target/release/bundle/macos/tauri-macos-draw-window-over-fullscreen.app
    ```
    - The window blinks only on the original workspace. **That's the problem.**
