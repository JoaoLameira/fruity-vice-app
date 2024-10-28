import React, { Suspense } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/utils/reactQuery'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'jotai'
import { ReactNode } from 'react'
import { queryClientAtom } from 'jotai-tanstack-query'
import { useHydrateAtoms } from 'jotai/utils'
import { Layout } from '@/components/Layout'
import { Toaster } from '@/components/ui/sonner'

const HydrateAtoms = ({ children }: { children: ReactNode }) => {
	useHydrateAtoms([[queryClientAtom, queryClient]])
	return children
}

const App: React.FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider>
				<HydrateAtoms>
					<Suspense fallback={<h2>Loading...</h2>}>
						<Layout />
						<Toaster expand closeButton richColors />
					</Suspense>
				</HydrateAtoms>
				<ReactQueryDevtools initialIsOpen={true} />
			</Provider>
		</QueryClientProvider>
	)
}

export default App
