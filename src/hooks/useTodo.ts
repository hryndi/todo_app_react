import { useCallback, useMemo, useState } from "react";
import { nanoid } from "nanoid";

export const useTodo = () => {
  const [itemLi, setItemLi] = useState<
    { id: string; content: string; isDone: boolean }[]
  >([]);

  const [task, setTask] = useState("");
  const [itemId, setItemId] = useState("");

  const addHandler = () => {
    if (task === "") {
      console.log("Please, write your task down");
      return;
    }
    if (itemId !== "") {
      setItemLi((prevVal) =>
        prevVal.map((item) =>
          item.id !== itemId ? item : { ...item, id: itemId, content: task }
        )
      );
      setItemId("");
      return;
    } else {
      setItemLi((prevVal) => [
        ...prevVal,
        { id: nanoid(), content: task, isDone: false },
      ]);
    }
  };

  const checkBoxHandler = (id: string) => {
    setItemLi((prevVal) =>
      prevVal.map((item) =>
        item.id !== id
          ? item
          : {
              ...item,
              id: item.id,
              content: item.content,
              isDone: !item.isDone,
            }
      )
    );
  };

  const deleteHandler = (id: string) => {
    setItemLi((prevVal) => prevVal.filter((item) => item.id !== id && item));
  };

  const editHandler = useCallback(
    (id: string) => {
      const liEditItem = itemLi.find((item) => item.id === id);
      if (!liEditItem) return;

      setTask(liEditItem.content);
      setItemId(id);
    },
    [itemLi]
  );

  const memoItems = useMemo(() => itemLi, [itemLi]);

  return {
    addHandler,
    task,
    setTask,
    itemLi: memoItems,
    checkBoxHandler,
    editHandler,
    deleteHandler,
    itemId,
  };
};
