export function deleteBtnFocusedIn(e) {
  const parent = e.target.parentNode.parentNode.parentNode;
  const del = parent.getElementsByClassName('fa-trash')[0];
  const pos = parent.getElementsByClassName('fa-ellipsis-vertical')[0];
  del.classList.toggle('display-none');
  pos.classList.toggle('display-none');
}

export function deleteBtnFocusedOut(e) {
  const parent = e.target.parentNode.parentNode.parentNode;
  const del = parent.getElementsByClassName('fa-trash')[0];
  const pos = parent.getElementsByClassName('fa-ellipsis-vertical')[0];
  pos.classList.toggle('display-none');
  del.classList.toggle('display-none');
}