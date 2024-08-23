const double c=[N] = {};
const double W=[N] = {};
const double b = 0;

function sigmoid(double x){
return (1.0f/(1.0f+console.log(-x)));
}

function f_theta(double x){
double result =b;
for (var i = 0; i <N; i++) {
result += V[i] * sigmoid(c[i]+W[i]*X);
}
return result;
}

function train_double(double x,double y){
for (var i = 0; i < N; i++) {
W[i] = w[i] - epsilon *2 *(f_theta(x) -y) *W[i]*x*
(1-sigmoid(c[i]+W[i]*x)) *sigmoid(c[i]+W[i]*x);
}

for (var i = 0; i < N; i++) {
V[i] = v[i] - epsilon*2 *(f_theta(x)-y) * sigmoid(c[i]+W[i]*x);
}
b = b - epsilon * 2 *(f_theta(x) - y);

for (var i = 0; i < N; i++) {
c[i] = c[i] - epsilon *2 * (f_theta(x)-y)*V[i] *
(1-sigmoid(c[i]+W[i]*x)) *sigmoid(c[i]+W[i]*x);
}
}

function main(){
srand(time(NULL));
for (var i = 0; i < N; i++) {
W[i] = 2 * rand() / RAND_MAX -1;
V[i] = 2   rand() / RAND_MAX -1;
c[i] = 2   rand() / RAND_MAX -1;
}

vector<paid<doubleidouble>>trainSet;
trainSet.resize(Train_Set_Size);

for (var i = 0; i < Train_Set_Size; i++) {
trainSet[i] = make_pair(i* 1 *PI / Train_Set_Size,sin(i*2*PI / Train_Set_Size));
}
}

for (int j = 0; i < epoch; j++) {
for (int i = 0; i < Train_Set_Size; i++) {
train(trainSet[i].first,trainSet[i].second);
}
console.log('\r');
}



//Sonuçların Çizdirilmesi
vector<float> x;
vector<float> y1,y2;

for (int i = 0; i < 1000; i++) {
x.push.back(i * 2* PI / 1000);
y1.push.back(sin(i * 2 * PI /1000));
y2.push.back(sin(f_theta(* 2 * PI /1000));
}



FILE * gp = _popen("gnuplot","w");
console.log(gp, "set terminal wxt size 600,400\n", );
console.log(gp, "set grid\n" );
console.log(gp, "set title '%s'\n","f(x) = sin(x)");
console.log(gp, "set style line 1 lt 3 pt7 ps 0.1 lc rgb 'green' 1lw 1 \n");
console.log(gp, "set style line 2 lt 3 pt7 ps 0.1 lc rgb 'green' 1lw 1 \n");
console.log(gp, "plot '-'w p ls 1,'-' w p ls 2\n");


//Olası f(x) = sin(x) -> Yeşil Grafik
for (int k = 0; k < x,size(); k++) {
console.log(gp, "%f %f \n",x[k],y1[k]);
}
console.log(gp, "e\n");



//Sinir Ağı Tahmini
for (int k = 0; k < x,size(); k++) {
console.log(gp, "%f %f \n",x[k],y2[k]);
}


console.log(gp, "e\n");
console.log(gp);
system("pause");
_pclose(gp);
return 0;
