import AboutCPPage from '~/components/About/About';

export interface IAppProps {}

export default function AboutPage(props: IAppProps) {
    return (
        <div className={'container cpmount'}>
            <AboutCPPage />
        </div>
    );
}
