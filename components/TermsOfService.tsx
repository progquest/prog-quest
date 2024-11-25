'use client';

import { cn } from '@/lib/utils';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

const TermsText = () => {
	return (
		<div className='overflow-scroll space-y-2 w-full h-full scroll-smooth'>
			<div>
				Bem-vindo(a) ao ProgQuest, sua plataforma interativa de
				aprendizado de programação com um toque de cultura pop! Antes de
				embarcar nesta jornada educacional emocionante, é essencial
				entender e concordar com os Termos e Condições que regem a
				utilização dos nossos serviços.
			</div>
			<div>
				Ao acessar e utilizar o ProgQuest, você concorda em cumprir e
				estar vinculado aos seguintes termos e condições. A nossa missão
				é proporcionar uma experiência educacional inovadora e
				envolvente, e esses termos visam garantir a segurança, a
				integridade e o respeito em nossa comunidade de aprendizes de
				programação.
			</div>
			<div>
				Por favor, leia atentamente os Termos e Condições a seguir. Se
				tiver alguma dúvida ou preocupação, não hesite em entrar em
				contato conosco (email de alguém). Ao continuar a utilizar o
				ProgQuest, você reconhece que compreendeu e concorda com os
				termos estabelecidos.
			</div>
			<ol className='space-y-2'>
				<li className='text-lg font-semibold'>
					1. Aceitação dos Termos:
				</li>
				<div>
					Ao acessar e utilizar o ProgQuest, você automaticamente
					concorda com estes Termos e Condições. Se não concordar com
					algum aspecto destes termos, pedimos que não utilize nossos
					serviços.
				</div>

				<li className='text-lg font-semibold'>2. Uso Responsável:</li>
				<div>
					Compromete-se a utilizar o ProgQuest de maneira responsável,
					respeitando outros usuários e cumprindo todas as leis e
					regulamentos aplicáveis.
				</div>

				<li className='text-lg font-semibold'>3. Conta do Usuário:</li>
				<div>
					Ao criar uma conta no ProgQuest, somos responsáveis por
					manter a confidencialidade de suas credenciais e informações
					de sua conta.
				</div>

				<li className='text-lg font-semibold'>
					4. Propriedade Intelectual:
				</li>
				<div>
					Reconhecemos que todos os direitos autorais, marcas
					registradas e outros direitos de propriedade intelectual
					relacionados às franquias referenciadas em nossa plataforma
					são de propriedade intelectual exclusivas das respectivas
					empresas detentoras. Reiteramos que a plataforma não possui
					fins lucrativos, apenas educacionais, portanto não há ganhos
					derivados da utilização de propriedade intelectual de
					outrem. Buscamos utilizar as personagens de maneira
					respeitosa e meramente ilustrativa.
				</div>

				<li className='text-lg font-semibold'>
					5. Privacidade e Dados Pessoais:
				</li>
				<div>
					Entende e concorda com a nossa Política de Privacidade, que
					descreve como coletamos, usamos e protegemos suas
					informações pessoais.
				</div>

				<li className='text-lg font-semibold'>
					6. Alterações nos Termos:
				</li>
				<div>
					Reconhece que os Termos e Condições podem ser atualizados
					periodicamente, e concorda em revisá-los regularmente.
				</div>

				<li className='text-lg font-semibold'>
					7. Encerramento da Conta:
				</li>
				<div>
					Reservamo-nos o direito de encerrar ou suspender sua conta,
					a nosso critério, caso haja violação destes Termos e
					Condições.
				</div>

				<div>
					Agradecemos por utilizar o ProgQuest como sua plataforma de
					aprendizado. Estamos empolgados em tê-lo(a) conosco nessa
					jornada educacional única. Se precisar de esclarecimentos
					adicionais ou tiver alguma preocupação, entre em contato
					conosco.
				</div>
				<div>Seja bem-vindo(a) ao ProgQuest!</div>
			</ol>
		</div>
	);
};

const TermsOfService = () => {
	return (
		<div className='text-sm font-medium text-center text-neutral-900'>
			Ao fazer login você está aceitando nossos
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button
						variant='link'
						className='inline'>
						Termos de Uso
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Termos de Uso</AlertDialogTitle>
						<AlertDialogDescription className='max-h-96'>
							<TermsText></TermsText>
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogAction>Okay</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
};

export default TermsOfService;
