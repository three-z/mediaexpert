({
	block: 'template-page',
	title: 'Наши партнеры',
	content: [
		{
			block: 'content',
			content: [
				{
					block: 'breadcrumbs',
					content: [
						{
							elem: 'layout',
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
													content: 'Компания'
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
													content: 'Наши партнеры'
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
					block: 'page-title',
					mods: { 'underline': true },
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									elem : 'text',
									content : 'Наши партнеры'
								}
							]
						}
					]
				},
				{
					block: 'partners',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									block: 'partners-list',
									content: [
										{
											block: 'partners-list-item',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															tag: 'img',
															attrs: { src: 'img/tmp/clients/1.png' },
														}
													]
												}
											]
										},
										{
											block: 'partners-list-item',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															tag: 'img',
															attrs: { src: 'img/tmp/clients/2.png' },
														}
													]
												}
											]
										},
										{
											block: 'partners-list-item',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															tag: 'img',
															attrs: { src: 'img/tmp/clients/1.png' },
														}
													]
												}
											]
										},
										{
											block: 'partners-list-item',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															tag: 'img',
															attrs: { src: 'img/tmp/clients/2.png' },
														}
													]
												}
											]
										},
										{
											block: 'partners-list-item',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															tag: 'img',
															attrs: { src: 'img/tmp/clients/2.png' },
														}
													]
												}
											]
										},
										{
											block: 'partners-list-item',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															tag: 'img',
															attrs: { src: 'img/tmp/clients/2.png' },
														}
													]
												}
											]
										},
										{
											block: 'partners-list-item',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															tag: 'img',
															attrs: { src: 'img/tmp/clients/1.png' },
														}
													]
												}
											]
										},
										{
											block: 'partners-list-item',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															tag: 'img',
															attrs: { src: 'img/tmp/clients/2.png' },
														}
													]
												}
											]
										},
										{
											block: 'partners-list-item',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															tag: 'img',
															attrs: { src: 'img/tmp/clients/1.png' },
														}
													]
												}
											]
										},
										{
											block: 'partners-list-item',
											content: [
												{
													tag: 'a',
													attrs: { href: '#' },
													content: [
														{
															tag: 'img',
															attrs: { src: 'img/tmp/clients/2.png' },
														}
													]
												}
											]
										},
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