export const EditMaterialModal = ({ onClose, onEdit }) => {
  return (
    <div>
      <h2>Модалка редактирования материала</h2>
      <button
        type="button"
        onClick={() => {
          onEdit();
          onClose();
        }}
      >
        Вот теперь точно редактировать
      </button>
      <button type="button" onClick={onClose}>
        Закрыть
      </button>
    </div>
  );
};
