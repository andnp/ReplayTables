from setuptools import setup, find_packages

setup(
    name='ReplayTables',
    url='https://github.com/andnp/ReplayTables.git',
    author='Andy Patterson',
    author_email='andnpatterson@gmail.com',
    packages=find_packages(exclude=['tests*']),
    install_requires=[
        'numpy<1.21.0>=1.17',
        'numba>=0.52.0',
    ],
    version='0.0.1',
    license='MIT',
    description='A simple replay buffer implementation in python for sampling n-step trajectories',
    long_description='todo',
)
