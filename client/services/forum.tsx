export const adaptTopicData = (topic: any) => {
  return Object.assign({}, topic, {
    date: new Date(topic.createdAt).toISOString()
  });
}
