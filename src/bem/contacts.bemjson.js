({
	block: 'template-page',
	title: 'Контакты',
	content: [
		{
			block: 'content',
			content: [
				{
					block : 'template-breadcrumbs',
					links: [
						{
							url: '#',
							content: 'Главная'
						},
						{
							url: '#',
							content: 'Контакты'
						}
					]
				},
				{
					block: 'template-page-title',
					title : 'Контакты'
				},
				{
					block: 'contacts',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									block : 'contacts-feedback',
									content : [
										{
											elem : 'title',
											content : 'МедиаЭКСПЕРТ'
										},
										{
											elem : 'content',
											content : [
												{
													tag: '',
													content: 'Наш адрес: <br>'
												},
												{
													elem: 'address',
													tag: 'span',
													content: 'г.Архангельск, ул.Попова, д.6 <br><br>'
												},
												{
													tag: '',
													content: 'РЕКЛАМА НА ТВ '
												},
												{
													elem: 'phone',
													tag: 'strong',
													content: '(8182) 65-79-70 <br>'
												},
												{
													tag: '',
													content: 'РЕКЛАМА НА РАДИО '
												},
												{
													elem: 'phone',
													tag: 'strong',
													content: '(8182) 65-79-80'
												},
												{
													block : 'contacts-form',
													tag: 'form',
													content : [
														{
															elem : 'input',
															tag: 'input',
															attrs: { 'type': 'text', 'placeholder': 'Ваше имя' }
														},
														{
															elem : 'input',
															tag: 'input',
															attrs: { 'type': 'text', 'placeholder': 'Телефон или e-mail' }
														},
														{
															elem: 'textarea',
															tag: 'textarea',
															content: ''
														},
														{
															elem : 'captcha',
															content : [
																{
																	elem : 'captcha-image',
																	content : [
																		{
																			tag: 'img',
																			attrs: { src: 'img/tmp/contacts/captcha.png' },
																		},
																	]
																},
																{
																	elem : 'captcha-input',
																	tag: 'input',
																	attrs: { 'type': 'text' }
																},
																{
																	elem : 'captcha-refresh',
																	tag: 'a',
																	attrs: { href: '#' },
																	content: 'Обновить'
																},
																{
																	elem : 'captcha-description',
																	content : 'Введите цифры с картинки'
																}
															]
														},
														{
															elem : 'buttons',
															content : [
																{
																	elem: 'button',
																	tag: 'input',
																	attrs: { type: 'submit', value: 'Оформить заявку' }
																}
															]
														}
													]
												}
											]
										}
									]
								},
								{
									elem : 'info',
									content : [
										{
											tag: '',
											content: 'г. Архангельск, ул. Попова, д. 6 <br>'
										},
										{
											tag: '',
											content: '+7 (8182) 65-79-70 ; 65-79-80 <br>'
										},
										{
											tag: 'a',
											attrs: { href: 'mailto:info@mediaexp.ru' },
											content: 'info@mediaexp.ru'
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
})