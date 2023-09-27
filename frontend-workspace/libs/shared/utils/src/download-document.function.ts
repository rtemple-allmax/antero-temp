
export const downloadDocument = (record: any, blob: Blob | undefined | null): void => {
  if (record && blob) {
    const data = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = data;
    link.download = record.name || 'download';
    link.target = '_blank'
    // this is necessary as link.click() does not work on Firefox
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    setTimeout(() => {
      URL.revokeObjectURL(data);
      link.remove();
    }, 100);
  }
}