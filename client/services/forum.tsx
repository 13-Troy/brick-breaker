export const adaptTopicData = (topic: any) => {
  return Object.assign({}, topic, {
    ownerAvatarUrl: '',
    ownerName: 'Семен',
    date: new Date(topic.createdAt).toISOString()
  });
}
