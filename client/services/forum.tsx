export const filterData = (post: Array<Record<string, string>> | any) => {
  return Object.keys(post)
    .filter((key) => key !== 'content' && key !== 'user_id')
    .reduce((obj, key) => {
      return Object.assign(obj, {
        [key]: post[key],
      });
    }, {});
};
