({
	block: 'template-page',
	title: 'Вакансии',
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
							content: 'Компания'
						},
						{
							url: '#',
							content: 'Вакансии'
						}
					]
				},
				{
					block: 'template-page-title',
					title : 'Вакансии'
				},
				{
					block: 'vacancies-item',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									block: 'vacancies-card',
									content: [
										{
											elem : 'headings',
											content : [
												{
													elem: 'date',
													content: '9 августа 2012'
												},
												{
													elem: 'title',
													content: 'Офис-Менеджер'
												},
												{
													elem: 'pay',
													content: [
														{
															tag: 'strong',
															content: 'З/П: ',
														},
														{
															tag: '',
															content: '10-15 т.р.',
														}
													]
												}
											]
										},
										{
											elem : 'info',
											content : [
												{
													tag: 'h3',
													content: 'Должностные обязанности:'
												},
												{
													tag: '',
													content: '- Входящие/исходящие звонки; <br>- составление писем, запросов, и других документов. <br>- фиксация и передача служебной информации Генеральному директору и сотрудникам компании; <br>- обеспечение документооборота компании: входящая и исходящая корреспонденция, -регистрация, учет, хранение, архивирование документов; <br>- подготовка проектов договоров, коммерческих предложений, писем, запросов и других документов, касающихся деятельности компании; <br>- обеспечение офиса канцтоварами, прием, учет, хранение и выдача; <br>- координация и контроль работы водителя: (прием заявок на машину и разработка графика использования автотранспорта компании); курьера (прием заявок и разработка графика); <br>- работа с корреспонденцией, поступающей на усмотрение руководителя, и дальнейшее ее распределение. <br>',
												},
												{
													tag: 'h3',
													content: 'Требования:'
												},
												{
													tag: '',
													content: '- Опыт работы на аналогичной должности от 1 года; <br>- Отличное знание компьютера; <br>- Ответственность, коммуникабельность, желание расти и развиваться. <br>',
												},
												{
													tag: 'h3',
													content: 'Мы предлагаем:'
												},
												{
													tag: '',
													content: 'График работы 5/2 с 8-17, 9-18, 10-19;оформление по ТК, РФ;работа в стабильной компании с хорошей репутацией на рынке;молодой, дружный коллектив;офис расположен в 10 минутах езды от станции метро ВДНХ.Полный рабочий деньНа территории работодателя',
												}
											]
										}
									]
								},
								{
									block: 'vacancies-form',
									content: [
										{
											tag: 'form',
											elem: 'form',
											content: [
												{
													tag: 'input',
													elem: 'input',
													attrs: { type: 'text', placeholder: 'Ваше имя' }
												},
												{
													tag: 'input',
													elem: 'input',
													attrs: { type: 'text', placeholder: 'Телефон' }
												},
												{
													elem : 'attach',
													content : [
														{
															tag: 'input',
															elem: 'input',
															attrs: { type: 'text', disabled: 'disabled', placeholder: 'Прикрепить резюме' }
														},
														{
															tag: 'button',
															elem: 'attach-button',
															content: [
																{
																	tag: '',
																	content: 'Обзор'
																},
																{
																	tag: 'input',
																	attrs: { type: 'file' }
																}
															]
														}
													]
												},
												{
													tag: 'input',
													elem: 'button',
													attrs: { type: 'submit', value: 'Отправить' }
												}
											]
										}
									]
								},
								{
									elem: 'back',
									content: [
										{
											block: 'back-button',
											tag: 'a',
											attrs: { href: '#' },
											content: '← назад'
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