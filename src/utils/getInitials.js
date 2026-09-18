function getInitials(fullName) {
  return fullName
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export default getInitials
