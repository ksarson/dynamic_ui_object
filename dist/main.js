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
    });
  const e = document.querySelector('.carousel'),
    t = document.querySelector('.prev-btn'),
    n = document.querySelector('.next-btn');
  let c = 0;
  const l = 100 / e.children.length;
  function r() {
    const t = -c * l;
    e.style.transform = `translateX(${t + l}%)`;
  }
  n.addEventListener('click', () => {
    (c = (c + 1) % e.children.length), r();
  }),
    t.addEventListener('click', () => {
      (c = (c - 1 + e.children.length) % e.children.length), r();
    }),
    console.log('Template');
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBSUFBLFNBQVNDLGNBQWMsV0FBV0MsaUJBQWlCLFNBQVMsS0FDMURGLFNBQVNDLGNBQWMsV0FBV0UsTUFBTUMsUUFBVSxPQUNsREosU0FBU0MsY0FBYyxXQUFXRSxNQUFNQyxRQUFVLE9BQ2xESixTQUFTQyxjQUFjLFdBQVdFLE1BQU1DLFFBQVUsTUFBTSxJQUcxREosU0FBU0MsY0FBYyxZQUFZQyxpQkFBaUIsU0FBVUcsSUFDNUQsTUFBTSxPQUFFQyxHQUFXRCxFQUNmQyxFQUFPQyxVQUFVQyxTQUFTLGFBQzVCUixTQUFTQyxjQUFjLFdBQVdFLE1BQU1DLFFBQVUsT0FDbERKLFNBQVNDLGNBQWMsV0FBV0UsTUFBTUMsUUFBVSxPQUNsREosU0FBU0MsY0FBYyxXQUFXRSxNQUFNQyxRQUFVLE9BQ3BELElBR0YsTUFBTUssRUFBV1QsU0FBU0MsY0FBYyxhQUNsQ1MsRUFBVVYsU0FBU0MsY0FBYyxhQUNqQ1UsRUFBVVgsU0FBU0MsY0FBYyxhQUV2QyxJQUFJVyxFQUFlLEVBQ25CLE1BQU1DLEVBQWEsSUFBTUosRUFBU0ssU0FBU0MsT0FFM0MsU0FBU0MsSUFDUCxNQUFNQyxHQUFVTCxFQUFlQyxFQUMvQkosRUFBU04sTUFBTWUsVUFBWSxjQUFjRCxFQUFTSixLQUNwRCxDQUVBRixFQUFRVCxpQkFBaUIsU0FBUyxLQUNoQ1UsR0FBZ0JBLEVBQWUsR0FBS0gsRUFBU0ssU0FBU0MsT0FDdERDLEdBQWdCLElBR2xCTixFQUFRUixpQkFBaUIsU0FBUyxLQUNoQ1UsR0FBZ0JBLEVBQWUsRUFBSUgsRUFBU0ssU0FBU0MsUUFBVU4sRUFBU0ssU0FBU0MsT0FDakZDLEdBQWdCLElBckNoQkcsUUFBUUMsSUFBSSxXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViX3RlbXBsYXRlLy4vc3JjL3dlYnBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XG4gIGNvbnNvbGUubG9nKCdUZW1wbGF0ZScpO1xufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnOyAvLyBEaXNwbGF5IHRoZSBuYXZiYXJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vIEhpZGUgdGhlIGJ1dHRvblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BhY2VyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJzsgLy8gSGlkZSB0aGUgc3BhY2VyIHRvIGtlZXAgdGl0bGUgZXZlblxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpdGVtJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50O1xuICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmF2aXRlbScpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vIEhpZGUgdGhlIG5hdmJhclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24nKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnOyAvLyBEaXNwbGF5IHRoZSBidXR0b25cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BhY2VyJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JzsgLy8gRGlzcGxheSB0aGUgc3BhY2VyIHRvIGtlZXAgdGl0bGUgZXZlblxuICB9XG59KTtcblxuY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwnKTtcbmNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldi1idG4nKTtcbmNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dC1idG4nKTtcblxubGV0IGN1cnJlbnRJbmRleCA9IDA7XG5jb25zdCBpbWFnZVNoYXJlID0gMTAwIC8gY2Fyb3VzZWwuY2hpbGRyZW4ubGVuZ3RoO1xuXG5mdW5jdGlvbiB1cGRhdGVDYXJvdXNlbCgpIHtcbiAgY29uc3Qgb2Zmc2V0ID0gLWN1cnJlbnRJbmRleCAqIGltYWdlU2hhcmU7XG4gIGNhcm91c2VsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7b2Zmc2V0ICsgaW1hZ2VTaGFyZX0lKWA7XG59XG5cbm5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyAxKSAlIGNhcm91c2VsLmNoaWxkcmVuLmxlbmd0aDtcbiAgdXBkYXRlQ2Fyb3VzZWwoKTtcbn0pO1xuXG5wcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4IC0gMSArIGNhcm91c2VsLmNoaWxkcmVuLmxlbmd0aCkgJSBjYXJvdXNlbC5jaGlsZHJlbi5sZW5ndGg7XG4gIHVwZGF0ZUNhcm91c2VsKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZVdlYnNpdGU7XG4iXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiZGlzcGxheSIsImV2ZW50IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjYXJvdXNlbCIsInByZXZCdG4iLCJuZXh0QnRuIiwiY3VycmVudEluZGV4IiwiaW1hZ2VTaGFyZSIsImNoaWxkcmVuIiwibGVuZ3RoIiwidXBkYXRlQ2Fyb3VzZWwiLCJvZmZzZXQiLCJ0cmFuc2Zvcm0iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==
