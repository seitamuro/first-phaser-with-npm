export const gameObjectToObjectPoint = (gameObjects: unknown[]): ObjectPoint[] => {
  return gameObjects.map((gameObject: any) => gameObject as ObjectPoint);
}