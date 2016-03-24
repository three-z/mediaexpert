({
	block: 'template-page',
	title: 'Оформить заявку',
	content: [
		{
			block: 'content',
			content: [
				{
					block: 'breadcrumbs',
					content: [
						{
							elem: 'layout',
							mods: { 'container': true },
							mix: { block: 'container' },
							content: [
								{
									elem: 'list',
									content: [
										{
											elem: 'item',
											content: [
												{
													tag: 'a',
													elem: 'link',
													attrs: { href: '#' },
													content: 'Главная'
												},
											]
										},
										{
											elem: 'item',
											content: [
												{
													tag: 'a',
													elem: 'link',
													attrs: { href: '#' },
													content: 'Реклама на радио'
												},
											]
										},
										{
											elem: 'item',
											content: [
												{
													tag: 'a',
													elem: 'link',
													attrs: { href: '#' },
													content: 'Русское радио'
												},
											]
										}
									]
								}
							]
						}
					]
				},
				{
					block: 'on-radio-item',
					content: [
						{
							elem: 'layout',
							mods: { 'container': true },
							mix: { block: 'container' },
							content: [
								{
									elem: 'title',
									cls: 'js-gradient',
									content: 'Оформить заявку'
								},
								{
									elem: 'content',
									content: [
										{
											block: 'request-form',
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
															attrs: { type: 'text', placeholder: 'Компания' }
														},
														{
															tag: 'input',
															elem: 'input',
															mods: { 'small': true },
															attrs: { type: 'text', placeholder: 'Телефон' }
														},
														{
															tag: 'input',
															elem: 'input',
															mods: { 'small': true },
															attrs: { type: 'text', placeholder: 'E-mail' }
														},
														{
															tag: 'input',
															elem: 'button',
															attrs: { type: 'submit', placeholder: 'Отправить' }
														}
													]
												}
											]
										},
										{
											elem: 'text',
											content: '<div class="on-radio-slider__item"><div class="on-radio-slider__thumb"><img class="on-radio-slider__image" src="img/tmp/on-radio/2.png" /></div></div>Реклама на радио – идеальный компромисс между ценой и охватом.  <br>Мы продаем не эфирное время, а количество контактов с целевой аудиторией <br>рекламодателя. <br><br>Предлагаем нашим клиентам: <br> эффективной рекламной кампании; <br>выбор радиостанций  с наиболее подходящими характеристиками аудитории; <br>оптимальный график размещения с учетом географического и временного  таргетинга; <br>разработку и создание запоминающегося рекламного сценария; <br>изготовление качественных звуковых роликов. <br><br><img src="img/tmp/on-radio-item/1.jpg" style="float: right; margin-left: 20px;">В Москве вещание «Русского Радио» началось 2 августа 1995 года. Летом 1995 года вещание осуществлялось в тестовом режиме (с 8:00 до 22:00 в эфире только музыка без джинглов, затухание между песнями от 5 до 20 секунд). С 1996 года в эфире Русского радио появилась реклама. Каждый рекламный блок сопровождался шутками Николая Фоменко (до 2009 года), Вадима Галыгина (2009—2012) и Дмитрия Нагиева (с 20 декабря 2012 года)[1]. <br><br>В 1996 году «Русское Радио» учредило народную музыкальную премию «Золотой Граммофон», которая проходит в конце каждого года в Кремле в Москве и аналогичная церемония проходит в Ледовом дворце в Санкт-Петербурге. В 2006 году появился телевизионный аналог «Русского Радио» — телеканал RU TV. <br><br>Первым программным директором радиостанции был Степан Строев, который проработал до 2002 года. В 2002 году Степан Строев перешёл на Радио Тройка, вещавшее на соседней частоте 105.2, а вместо него программным директором был назначен Андрей Чижов. С 2007 до 2015 год место программного директора занимал Роман Емельянов. <br>'
										},
										{
											elem: 'back',
											content: [
												{
													tag: 'a',
													elem: 'back-link',
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
		}
	]
})