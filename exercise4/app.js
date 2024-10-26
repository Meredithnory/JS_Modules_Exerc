async function loadConfig() {
    const themeCall = await import('./theme.mjs');
    const d = new Date();
    let hour = d.getHours();
    if (hour > 18 || hour < 6) {
        themeCall.setDarkTheme();
    }
    else {
        themeCall.setLightTheme();
    }
}
loadConfig();