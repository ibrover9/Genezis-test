import axios, { AxiosError } from "axios";

export const createLead = async (key: string | null) => {
  try {
    const response = await axios.post(
      `amocrm-api/api/v4/leads`, // Укажите ваш поддомен
      [
        {
          name: "Новая сделка",
          price: 10000,
          status_id: 12345678, // ID статуса
          pipeline_id: 87654321, // ID воронки
          created_by: 0, // 0 - создана роботом
          updated_by: 123456, // ID пользователя, обновившего сделку
          responsible_user_id: 654321, // ID ответственного менеджера
          created_at: Math.floor(Date.now() / 1000), // Текущая дата в Unix Timestamp
          updated_at: Math.floor(Date.now() / 1000),
          _embedded: {
            tags: [
              { name: "Новый клиент" }, // Добавляем тег по названию
            ],
            contacts: [
              { id: 987654, is_main: true }, // Привязываем контакт
            ],
            companies: [
              { id: 543210 }, // Привязываем компанию
            ],
            source: {
              external_id: 112233, // Внешний ID источника
              type: "widget", // Тип источника
            },
          },
          custom_fields_values: [
            {
              field_id: 12345, // ID пользовательского поля
              values: [
                {
                  value: "Значение поля",
                },
              ],
            },
          ],
        },
      ],
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`, // Вставьте действующий access token
        },
      }
    );

    console.log("Успешно создана сделка:", response.data);
  } catch (error) {
    console.log(key);
    if (error instanceof AxiosError) {
      console.error(
        "Ошибка при создании сделки:",
        error.response?.data || error.message
      );
    } else if (error instanceof Error) {
      console.error("Произошла ошибка:", error.message);
    } else {
      console.error("Неизвестная ошибка", error);
    }
  }
};
