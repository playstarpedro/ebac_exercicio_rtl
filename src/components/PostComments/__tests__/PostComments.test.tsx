import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from "..";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });
  test("Deve renderizar o comentário feito", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });
  test("Deve fazer a inserção de 2 comentários", () => {
    render(<PostComment />);
    // definindo a constante textarea com sua id e simulando um comentário com o fireEvent
    const textarea = screen.getByTestId("comentario-textarea");
    fireEvent.change(textarea, { target: { value: "Primeiro comentário" } });

    // definindo a contante botao com sua id e simulando sua ação com o fireEvent
    const botao = screen.getByTestId("btn-adicionar-produto");
    fireEvent.click(botao);

    // simulando mais um comentário
    fireEvent.change(textarea, { target: { value: "Segundo comentário" } });
    fireEvent.click(botao);
  });
});
