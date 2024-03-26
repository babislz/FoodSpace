Introdutória (
	Cadastro e login de contas,
	Cadastro de novos restaurantes
);

Login ();
Cadastro();

Inicial (
	cards das lojas (
		Nome, 
		Horário de funcionamento e distância até o local
	),
	cards recomendações,
	cards de promoções,
	busca,
	endereço e cadastro de endereços,
	carrinho,
	opções(
		histórico de pedidos,
		favoritos,
		meus dados,
		pagamento,
		sair	
	);	
);

Perfil (
	foreign key Inicial - opções()
);
