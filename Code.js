function extractAndDownloadChapter() {
  const paragraphs = document.querySelectorAll('.styles_content__sSzM_ p');
  const allText = Array.from(paragraphs)
    .map(p => p.textContent.trim())
    .filter(Boolean)
    .join('\n');
  const blob = new Blob([allText], { type: 'text/plain' });
  const anchor = document.createElement('a');
  anchor.href = URL.createObjectURL(blob);
  anchor.download = 'chapter.txt';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
