(() => {
  'use strict';
  document.querySelector('.button').addEventListener('click', () => {
    (document.querySelector('.navbar').style.display = 'flex'),
      (document.querySelector('.button').style.display = 'none'),
      (document.querySelector('.spacer').style.display = 'none');
  }),
    document.querySelector('.navitem').addEventListener('click', (e) => {
      const { target: t } = e;
      t.classList.contains('navitem') &&
        ((document.querySelector('.navbar').style.display = 'none'),
        (document.querySelector('.button').style.display = 'flex'),
        (document.querySelector('.spacer').style.display = 'flex'));
    }),
    console.log('Template');
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBSUFBLFNBQVNDLGNBQWMsV0FBV0MsaUJBQWlCLFNBQVMsS0FDMURGLFNBQVNDLGNBQWMsV0FBV0UsTUFBTUMsUUFBVSxPQUNsREosU0FBU0MsY0FBYyxXQUFXRSxNQUFNQyxRQUFVLE9BQ2xESixTQUFTQyxjQUFjLFdBQVdFLE1BQU1DLFFBQVUsTUFBTSxJQUcxREosU0FBU0MsY0FBYyxZQUFZQyxpQkFBaUIsU0FBVUcsSUFDNUQsTUFBTSxPQUFFQyxHQUFXRCxFQUNmQyxFQUFPQyxVQUFVQyxTQUFTLGFBQzVCUixTQUFTQyxjQUFjLFdBQVdFLE1BQU1DLFFBQVUsT0FDbERKLFNBQVNDLGNBQWMsV0FBV0UsTUFBTUMsUUFBVSxPQUNsREosU0FBU0MsY0FBYyxXQUFXRSxNQUFNQyxRQUFVLE9BQ3BELElBZkFLLFFBQVFDLElBQUksVyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYl90ZW1wbGF0ZS8uL3NyYy93ZWJwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xuICBjb25zb2xlLmxvZygnVGVtcGxhdGUnKTtcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JzsgLy8gRGlzcGxheSB0aGUgbmF2YmFyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvLyBIaWRlIHRoZSBidXR0b25cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwYWNlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vIEhpZGUgdGhlIHNwYWNlciB0byBrZWVwIHRpdGxlIGV2ZW5cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aXRlbScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdml0ZW0nKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvLyBIaWRlIHRoZSBuYXZiYXJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JzsgLy8gRGlzcGxheSB0aGUgYnV0dG9uXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwYWNlcicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7IC8vIERpc3BsYXkgdGhlIHNwYWNlciB0byBrZWVwIHRpdGxlIGV2ZW5cbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVXZWJzaXRlO1xuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJldmVudCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=
